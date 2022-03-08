import { Component, ViewEncapsulation } from '@angular/core';
import { FinalDialogComponent } from '../final-dialog/final-dialog.component';
import { Board } from '../models/board';
//import data from '../../assets/map_5x5/level1_5x5.json';

import * as data from '../../assets/map_5x5/level1_5x5.json';
import * as data2 from '../../assets/map_6x6/level1_6x6.json';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BoardComponent {

  private sideSize = 0;
  private matrizSize = this.sideSize * this.sideSize;
  public squares: any[] = [];

  public levelName: string="";

  public topCountofTents: number[] = [];
  public leftCountofTents: number[] = [];
  private countOfTentsInLevel: number = 0;

  public items: number[] = [];
  /*public items: number[] = [1, 1, 1, 1, 1,
    1, 0, 1, 0, 1,
    1, 1, 1, 1, 1,
    0, 0, 1, 1, 1,
    1, 1, 1, 1, 0];*/

  public correctLvl: number[] = [];
  /*public correctLvl: number[] = [1, 1, 1, 3, 1,
    3, 0, 1, 0, 1,
    1, 1, 1, 1, 1,
    0, 0, 3, 1, 3,
    3, 1, 1, 1, 0];*/

  public startLevel: number[][]= [];
  public correctLevel: number[][]=[];
    
  public datas: number[] = [];
  public levelFromJson: any;

  public levelIsEnd = false;


  constructor() { 


  }

  ngOnInit(): void {
    this.newGame(data);
  }

  reset(): void {
    this.newGame(data);
  }

  newGame(lvl:any) {

    let level: Board =  JSON.parse(JSON.stringify(lvl));

    this.sideSize = level.startLevel.length;
    this.sideSize = level.startLevel.length;
    this.matrizSize = this.sideSize*this.sideSize;
    this.topCountofTents = level.columnValues;
    this.leftCountofTents = level.rowValues;
    this.startLevel = level.startLevel;
    this.correctLevel = level.correctLevel;
    this.levelName = level.nameLevel;


    this.levelIsEnd = false;
    //this.datas = [];

    /*this.items.forEach((element, index, items) => {
      this.datas.push(items[index]);
      //this.datas.push(element);
    });*/

    this.countOfTentsInLevel = this.getCountOfTents();

  }

  createBoard(): void {

  }

  clickTile(val: number): void {
    if(!this.levelIsEnd){
      if (this.datas[val] !== 3) {
        this.datas[val] += 1;
      }
      else {
        this.datas[val] = 1;
      }
  
      this.check_LevelIsEnd();
    }
  }

  clickTile2(x:number, y:number):void{
    if(!this.levelIsEnd){
      if(this.startLevel[x][y] !==3){
        this.startLevel[x][y]+=1;
      }
      else{
        this.startLevel[x][y]=1;
      }

      this.check_LevelIsEnd2();
      this.levelIsEnd ? this.newGame(data2): 0;
    }
  }

  check_LevelIsEnd(): void {

    if(this.checkCountOfTents() === 5){
      let isCorrect = 0;
  
      this.correctLvl.forEach((element, index, items) => {

        if(element === 3){
          if(this.datas[index] === this.correctLvl[index]){
            isCorrect++;
          }
        }

      });
  
      isCorrect === 5 /*this.datas.length*/ ? this.levelIsEnd = true : false;
      
      return;
    }

  }

  check_LevelIsEnd2():void{
    if(this.checkCountOfTents2() === this.sideSize){
      let isCorrect=0;

      this.correctLevel.forEach((element, i, items)=>{
        this.correctLevel[i].forEach((element, j ,items)=>{
          if(element === 3){
            if(this.startLevel[i][j] === this.correctLevel[i][j])
              isCorrect++;
          }
        })
      });

      /*count of tents*/
      isCorrect === this.sideSize ? this.levelIsEnd = true: false;
      return;
    }
  }

  private checkCountOfTents(): number{
    let countOfPutTents = 0;
    this.datas.forEach((element, index, items) => {
      if(element == 3)
        countOfPutTents++;
    });

    return countOfPutTents;
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

  /*public callFinalDialog(): void{
    showFinal();
  }*/

}
