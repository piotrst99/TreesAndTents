import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinalDialogComponent } from '../final-dialog/final-dialog.component';
import { Board } from '../models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BoardComponent {

  @Input() lvl: string = '';
  @Input() map: string = '';
  @Input() mapFromFile :any;

  private boardFromFile :any = null;

  public levelName: string="";

  public topCountofTents: number[] = [];
  public leftCountofTents: number[] = [];
  private countOfTentsInLevel: number = 0;
  private sideSize = 0;

  private startTime: any;     // startTime? :Date;
  private endTime: any;       // endTime? :Date;
  public gameTime: string = "";

  public startLevel: number[][]= [];
  public correctLevel: number[][]=[];
    
  public datas: number[] = [];
  public levelIsEnd = false;
  public levelIsIncorrect = false;

  public playerMoves: number[][] = [];

  constructor(private router: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    //console.log('BoardComponent - ngOnInit');
    //console.log('lvl', this.lvl);
    //console.log('map', this.map);
    //console.log('mapFromFile', this.mapFromFile);
    //console.log('check', this.mapFromFile !== null || this.mapFromFile !== undefined);
    // if(this.mapFromFile !== null || this.mapFromFile !== undefined){
    if(this.mapFromFile || this.mapFromFile !== undefined){
      const fileReader = new FileReader();

      //console.log(this.mapFromFile);
      fileReader.readAsText(this.mapFromFile,'UTF-8');
      fileReader.onload = () => {
        this.boardFromFile = JSON.parse(JSON.parse(JSON.stringify(fileReader.result?.toString())));
        this.newGame(this.boardFromFile);
      }
    }
    else{
      this.router.params.forEach(param=>{
        let size = param['size'];
        let lvl = param['nr'];
        
        import('../../assets/map_'+size+'/'+lvl+'_'+size+'.json').
        then(m => {this.newGame(m); }).
        catch((e)=>{
          alert(lvl+' of '+size+' map not exists');
          this._router.navigate(['select-level']);
        });
      });
    }
  }

  reset(): void {
    //console.log('BoardComponent - reset')
    //import('../../assets/map_'+this.map+'/'+this.lvl+'').then(m => { this.newGame(m); });
    // if(this.mapFromFile !== null || this.mapFromFile !== undefined){
    if(this.mapFromFile || this.mapFromFile !== undefined){
      this.newGame(this.boardFromFile);
    }
    else{
      this.router.params.forEach(param=>{
        let size = param['size'];
        let lvl = param['nr'];
        
        import('../../assets/map_'+size+'/'+lvl+'_'+size+'.json').
        then(m => {this.newGame(m); }).
        catch((e)=>{
          alert(lvl+' of '+size+' map not exists');
          this._router.navigate(['select-level']);
        });
      });
    }
    
  }

  newGame(lvl:any) {
    //console.log('BoardComponent - newGame')
    let level: Board = JSON.parse(JSON.stringify(lvl));

    this.topCountofTents = level.columnValues;
    this.leftCountofTents = level.rowValues;
    this.startLevel = level.startLevel;
    this.correctLevel = level.correctLevel;
    this.levelName = level.nameLevel;
    this.sideSize = level.startLevel.length;

    this.levelIsEnd = false;
    this.levelIsIncorrect = false;

    this.countOfTentsInLevel = this.getCountOfTents();
    this.startTime = new Date();
    this.playerMoves = [];
  }

  createBoard(): void { }

  clickTile(x:number, y:number):void{
    //console.log('BoardComponent - clickTile');
    this.levelIsIncorrect = false;
    if(!this.levelIsEnd){
      if(this.startLevel[x][y] !== 0){
        if(this.startLevel[x][y] !==3){
          // [X, Y, previous state, current state]
          this.playerMoves.push([x, y, this.startLevel[x][y], this.startLevel[x][y]+1]);
          this.startLevel[x][y]+=1;
        }
        else{
          this.startLevel[x][y]=1;
          this.playerMoves.push([x, y, 3, 1]);
        }
  
        this.check_LevelIsEnd();
      }
    }
    else{
      this.putGrass();
    }
  }

  undoMove(): void{
    //console.log('BoardComponent - undoMove');
    this.levelIsIncorrect = false;
    if(!this.levelIsEnd && this.playerMoves.length!==0){
      let id = this.playerMoves.length-1;
      let data = this.playerMoves[id];
      this.startLevel[data[0]][data[1]] = data[2];
      this.playerMoves.pop();
    }
  }

  checkPuttedItems():void{
    //console.log('BoardComponent - checkPuttedItems');
    this.startLevel.forEach((element, i, items)=>{
      this.startLevel[i].forEach((element, j ,items)=>{
        if(element === 2){
          if(!this.PuttedGrassInCorrectPlace(i,j)){
            this.levelIsIncorrect = true;
            return;
          }
          this.levelIsIncorrect = false;
        }
        if(element === 3){
          if(this.AdjacentTentsAreExists(i,j) || !this.PuttedTentInCorrectPlace(i,j)){
            this.levelIsIncorrect = true;
            return;
          }
          this.levelIsIncorrect = false;
        }
      });
    });
  }

  private AdjacentTentsAreExists(x: number, y:number): boolean{
    //console.log('BoardComponent - AdjacentTentsAreExists');
    for(let i=x-1; i<=x+1; i++){
      for(let j=y-1; j<=y+1; j++){
        if(i>=0 && i<=this.sideSize-1 && j>=0 && j<=this.sideSize-1 && (i!=x || j!=y))
          if(this.startLevel[i][j] === 3)
            return true;
      }
    }
    return false;
  }

  private PuttedTentInCorrectPlace(x: number, y: number): boolean{
    //console.log('BoardComponent - PuttedTentInCorrectPlace');
    return this.startLevel[x][y] === this.correctLevel[x][y];
  }

  private PuttedGrassInCorrectPlace(x: number, y: number):boolean{
    //console.log('BoardComponent - PuttedGrassInCorrectPlace');
    return this.startLevel[x][y] === this.correctLevel[x][y]+1;
  }

  check_LevelIsEnd():void{
    //console.log('BoardComponent - check_LevelIsEnd');
    if(this.checkCountOfTents() === this.countOfTentsInLevel){
      let isCorrect=0;

      this.correctLevel.forEach((element, i, items)=>{
        this.correctLevel[i].forEach((element, j ,items)=>{
          if(element === 3){
            if(this.startLevel[i][j] === this.correctLevel[i][j])
              isCorrect++;
          }
        })
      });

      /*check count of tents*/
      isCorrect === this.countOfTentsInLevel ? this.levelIsEnd = true: false;
      
      if(this.levelIsEnd) this.putGrass();
    
      return;
    }
  }

  private checkCountOfTents(): number{
    let countOfPutTents = 0;

    this.startLevel.forEach((element,index,items)=>{
      this.startLevel[index].forEach((element,index,items)=>{
        if(element==3)
          countOfPutTents++;
      });
    });

    return countOfPutTents;
  }
  
  private getCountOfTents():number{
    let countOfTents = 0;
    
    this.correctLevel.forEach((element,index,items)=>{
      this.correctLevel[index].forEach((element,index,items)=>{
        if(element==3)
          countOfTents++;
      });
    });

    return countOfTents;
  }

  private putGrass(): void{
    this.startLevel.forEach((element, i, items)=>{
      this.startLevel[i].forEach((element, j ,items)=>{
        if(element === 1){
          this.startLevel[i][j]++;
        }
      })
    });
  }

}
