import { Component, Input, ViewEncapsulation } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    //console.log(this.lvl+' '+this.map);
    import('../../assets/map_'+this.map+'/'+this.lvl+'').then(m => {this.newGame(m); });
  }

  reset(): void {
    import('../../assets/map_'+this.map+'/'+this.lvl+'').then(m => { this.newGame(m); });
  }

  newGame(lvl:any) {

    let level: Board =  JSON.parse(JSON.stringify(lvl));

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
    this.levelIsIncorrect = false;
    if(!this.levelIsEnd){
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
    else{
      this.putGrass();
    }
  }

  undoMove(): void{
    this.levelIsIncorrect = false;
    if(!this.levelIsEnd && this.playerMoves.length!==0){
      let id = this.playerMoves.length-1;
      let data = this.playerMoves[id];
      this.startLevel[data[0]][data[1]] = data[2];
      this.playerMoves.pop();
    }
  }

  checkPuttedItems():void{
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
    return this.startLevel[x][y] === this.correctLevel[x][y];
  }

  private PuttedGrassInCorrectPlace(x: number, y: number):boolean{
    return this.startLevel[x][y] === this.correctLevel[x][y]+1;
  }

  check_LevelIsEnd():void{
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
      
      if(this.levelIsEnd){
        this.putGrass();
      }

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
