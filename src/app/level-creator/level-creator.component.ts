import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {Board} from '../models/board'

//const fs = require('fs');

declare const selectTile: any;

@Component({
  selector: 'app-level-creator',
  templateUrl: './level-creator.component.html',
  styleUrls: ['./level-creator.component.css','./level-creator.component.scss']
})
export class LevelCreatorComponent{

  public boardSizes = [
    {sideSize:5, size:'5x5'}, 
    {sideSize:6, size:'6x6'},
    {sideSize:7, size:'7x7'}
  ];
  public selectedSize: number = 0;
  public board: number[][] = [];
  public countTentsRow: number[] = [];
  public countTentsColumn: number[] = [];
  public sizeIsSelected = false;

  constructor() { }

  selectBoardSize(event: any): void{
    this.countTentsColumn = new Array(this.selectedSize).fill(0);
    this.countTentsRow = new Array(this.selectedSize).fill(0);

    this.board = [];
    for(let i=0; i<this.selectedSize; i++){
      this.board.push(new Array(this.selectedSize).fill(1));
    }
    this.sizeIsSelected= true;
  }
  
  public clickTile(x: number, y: number):void{
    this.board[x][y] = 4;
    //selectTile(x, y, this.selectedSize);
  }

  public onTileClick(x: number, y: number): void{
    //console.log('clicked');
    if(this.board[x][y]!=2){
      this.board[x][y] += 1;
    }
    else{
      this.board[x][y] = 0;
    }
  }

  public saveBoard():void{
    if(!this.CountOfTentsAndTreesAreSame() || this.AdjacentTentsAreExists() ||
      !this.AllTentsHasTrees()){
      alert('Mistakes found!');
    }
    else{
      // Save board to json
      this.SaveToJson(this.board);
    } 
  }

  public resetBoard():void{
    this.board.forEach((element,i,items)=>{
      this.board[i].forEach((element,j,items)=>{
        this.board[i][j] = 1;
      });
    });
  }

  private AdjacentTentsAreExists(): boolean{
    let result = false;
    
    this.board.forEach((element,i,items)=>{
        this.board[i].forEach((element,j,items)=>{
          if(element === 2){
            for(let k=i-1; k<=i+1; k++){
              for(let l=j-1; l<=j+1; l++){
                if(k>=0 && k<=this.selectedSize-1 && l>=0 && l<=this.selectedSize-1 && (k!=i || l!=j))
                  if(this.board[k][l] === 2)
                    result = true;
              }
            }
          }
        });
      });
    
    return result;
  }

  private CountOfTentsAndTreesAreSame(): boolean{
    let countOfTents = 0, countOfTrees = 0; 
    
    this.board.forEach((element,i,items)=>{
      this.board[i].forEach((element,j,items)=>{
        if(element === 0)
          ++countOfTrees;
        else if(element === 2)
          ++countOfTents;
      });
    });

    return countOfTents === countOfTrees && countOfTents > 0 && countOfTrees > 0;
  }

  private AllTentsHasTrees():boolean{
    let countTentsHasTree = Array();
    this.board.forEach((element,i,items)=>{
      
      this.board[i].forEach((element,j,items)=>{
        let countOfTrees = 0;
        if(element === 2){
          //console.log(i+' '+j);
          if(i > 0)
            if(this.board[i-1][j] === 0)
              ++countOfTrees;
          if(i < this.selectedSize-1)
            if(this.board[i+1][j] === 0)
              ++countOfTrees;
          if(j > 0)
            if(this.board[i][j-1] === 0)
              ++countOfTrees;
          if(j < this.selectedSize-1)
            if(this.board[i][j+1] === 0)
              ++countOfTrees;
          //console.log(countOfTrees);
          countTentsHasTree.push(countOfTrees);
          //if(countOfTrees === 0)
            //return false;
          //else
            //++countTentsHasTree;
          //console.log(countTentsHasTree);
        }
        //return true;
      });
    });
    //console.log(countTentsHasTree);
    let index = countTentsHasTree.findIndex(el => el === 0);
    return index === -1;
  }

  private SaveToJson(board: number[][]):void{
    console.log(board);

    let startLevel = Array();
    let correctLevel = Array();
    let columnValues = Array();
    let rowValues = Array();
    let nameLevel = "";

    board.forEach((element, i, index)=>{
      let rowStart = new Array(board.length).fill(0);
      let rowCorrect = new Array(board.length).fill(0);
      board[i].forEach((element, j, index)=>{
        if(element === 2){
          rowStart[j] = 1;
          rowCorrect[j] = 3;
        }
        else{
          rowStart[j] = board[i][j];
          rowCorrect[j] = board[i][j];
        }
      });
      startLevel.push(rowStart);
      correctLevel.push(rowCorrect);
    });

    rowValues = this.GetCountOfTentsRow(board);
    columnValues = this.GetCountOfTentsColumn(board);
    
    let boardToSave:any = {
      "startLevel" : startLevel,
      "correctLevel" : correctLevel,
      "columnValues" : columnValues,
      "rowValues" : rowValues,
      "nameLevel" : nameLevel,
    };

    console.log(boardToSave);
    JSON.stringify(boardToSave);

    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(JSON.stringify(boardToSave)));
    a.setAttribute('download', "test.json");
    a.click();
  }

  private GetCountOfTentsRow(board: number[][]): number[]{
    let rowValues = new Array(board.length).fill(0);
    
    board.forEach((element, i, index)=>{
      let countTents = 0;
      board[i].forEach((element, j, index)=>{
        if(element === 2)
          ++countTents;
      });
      rowValues[i] = countTents;
    });

    return rowValues;
  }

  private GetCountOfTentsColumn(board: number[][]): number[]{
    let columnValues = new Array(board.length).fill(0);
    
    board.forEach((element, i, index)=>{
      let countTents = 0;
      board[i].forEach((element, j, index)=>{
        if(board[j][i] === 2)
          ++countTents;
      });
      columnValues[i] = countTents;
    });

    return columnValues;
  }

}
