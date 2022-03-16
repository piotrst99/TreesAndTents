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

  private startTime: any;     // startTime? :Date;
  private endTime: any;       // endTime? :Date;
  public gameTime: string = "";

  public startLevel: number[][]= [];
  public correctLevel: number[][]=[];
    
  public datas: number[] = [];
  public levelIsEnd = false;

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

    this.levelIsEnd = false;

    this.countOfTentsInLevel = this.getCountOfTents();
    this.startTime = new Date();
    this.playerMoves = [];
  }

  createBoard(): void { }

  clickTile2(x:number, y:number):void{
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

      this.check_LevelIsEnd2();
    }
  }

  undoMove(): void{
    if(!this.levelIsEnd && this.playerMoves.length!==0){
      let id = this.playerMoves.length-1;
      let data = this.playerMoves[id];
      this.startLevel[data[0]][data[1]] = data[2];
      this.playerMoves.pop();
    }
  }


  check_LevelIsEnd2():void{
    if(this.checkCountOfTents2() === this.countOfTentsInLevel){
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
      return;
    }
  }

  private checkCountOfTents2(): number{
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

}
