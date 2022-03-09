import { Component, ViewEncapsulation } from '@angular/core';
import { FinalDialogComponent } from '../final-dialog/final-dialog.component';
import { Board } from '../models/board';
//import data from '../../assets/map_5x5/level1_5x5.json';

import * as data from '../../assets/map_5x5/level1_5x5.json';
import * as data2 from '../../assets/map_6x6/level1_6x6.json';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BoardComponent {

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
    this.startTime = new Date();
  }

  createBoard(): void {

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
      
      /*if(this.levelIsEnd){
        this.endTime = new Date();
        let time = this.endTime - this.startTime
        
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        //let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        this.gameTime = minutes + ":" + seconds;

        //this.router.navigate(['/final-dialog']);


      }*/



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

      /*count of tents*/
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
