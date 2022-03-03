import { Component, ViewEncapsulation } from '@angular/core';
import { FinalDialogComponent } from '../final-dialog/final-dialog.component';
import { Board } from '../models/board';
//import data from '../../assets/map_5x5/level1_5x5.json';

//import * as data from '../../assets/map_5x5/level1_5x5.json';
import * as data from '../../assets/map_6x6/level1_6x6.json';

//import { json } from 'express';

//declare const showFinal: Function;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BoardComponent {

  private sideSize = 5;
  private matrizSize = this.sideSize * this.sideSize;
  public squares: any[] = [];

  public levelName: string="";

  public topCountofTents: number[] = [];
  public leftCountofTents: number[] = [];

  public items: number[] = [1, 1, 1, 1, 1,
    1, 0, 1, 0, 1,
    1, 1, 1, 1, 1,
    0, 0, 1, 1, 1,
    1, 1, 1, 1, 0];

  public correctLvl: number[] = [1, 1, 1, 3, 1,
    3, 0, 1, 0, 1,
    1, 1, 1, 1, 1,
    0, 0, 3, 1, 3,
    3, 1, 1, 1, 0];

  public startLevel: number[][]= [];
  public correctLevel: number[][]=[];
    
  public datas: number[] = [];
  public levelFromJson: any;

  public levelIsEnd = false;


  constructor() { 


  }

  ngOnInit(): void {
    this.newGame();
  }

  reset(): void {
    this.newGame();
  }

  newGame() {
    //this.datas = this.items;

    let level: Board =  JSON.parse(JSON.stringify(data));
    //let level2: Board =  JSON.parse(data);
    
    //let level3: Board = json().then(a=> new Board(JSON.parse(data)));

    //console.log(JSON.stringify(data));
    //console.log(level.startLevel);

    //console.log(level.startLevel);

    this.sideSize = level.startLevel.length;
    this.sideSize = level.startLevel.length;
    this.matrizSize = this.sideSize*this.sideSize;
    this.topCountofTents = level.columnValues;
    this.leftCountofTents = level.rowValues;
    this.startLevel = level.startLevel;
    this.correctLevel = level.correctLevel;
    this.levelName = level.nameLevel;

    console.log(this.topCountofTents);

    this.levelIsEnd = false;

    this.datas = [];

    this.items.forEach((element, index, items) => {
      this.datas.push(items[index]);
      //this.datas.push(element);
    });

    //this.createBoard();
    //this.squares = Array(this.matrizSize).fill(null);
  }

  createBoard(): void {
    /*for (let i = 1; i <= this.matrizSize; ++i) {
      let div = document.createElement('div');
      div.classList.add('tiles');
      if (i % this.sideSize === 1) div.style.clear = 'both';

      document.getElementById('board')?.appendChild(div);
    }*/

    /*for (let i = 0; i < 5; ++i) {
      let divRow = document.createElement('div');
      for (let j = 0; j < 5; ++j) {
        let divCell = document.createElement('div');
        divCell.innerHTML = ((i * 5) + (j + 1)).toString();
        //divCell.classList.add('tiles');
        
        if(this.datas[((i * 5) + (j + 1))-1] == 0){
          divCell.classList.add('tree');
        }
        else{
          divCell.classList.add('blackGround');
        }
        
        divRow.appendChild(divCell);
      }
      document.getElementById('board')?.appendChild(divRow);
    }*/
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

  check_LevelIsEnd(): void {

    if(this.checkCountOfTents() === 5){
      let isCorrect = 0;
  
      this.correctLvl.forEach((element, index, items) => {
        /*if (this.datas[index] != this.correctLvl[index]) {
          //alert('Incorrect');
        }
        else {
          isCorrect++;
        }*/

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

  private checkCountOfTents(): number{
    let countOfPutTents = 0;
    this.datas.forEach((element, index, items) => {
      if(element == 3)
        countOfPutTents++;
    });

    return countOfPutTents;
  }

  
  /*public callFinalDialog(): void{
    showFinal();
  }*/

}
