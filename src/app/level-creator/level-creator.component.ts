import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as e from 'express';
import { elementAt } from 'rxjs';

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
    this.board = [];
    for(let i=0; i<this.selectedSize; i++){
      this.board.push(new Array(this.selectedSize).fill(1));
    }
    this.sizeIsSelected= true;
  }
  
  public clickTile(x: number, y: number):void{
    //console.log(x+' '+y);
    this.board[x][y] = 4;
    selectTile(x, y, this.selectedSize);
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
    console.log(this.board);
    if(!this.CountOfTentsAndTreesAreSame() || this.AdjacentTentsAreExists()){
      alert('Mistakes found!');
    }
    else{
      // Save board to json
    } 
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

}
