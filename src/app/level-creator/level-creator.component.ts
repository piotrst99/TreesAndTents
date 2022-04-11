import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

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

}
