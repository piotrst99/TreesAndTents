import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-creator',
  templateUrl: './level-creator.component.html',
  styleUrls: ['./level-creator.component.css']
})
export class LevelCreatorComponent {

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
    //console.log(this.selectedSize);
    this.board = [];
    let arrayOfNumber = [];
    for(let i=0; i< this.selectedSize; i++){
      arrayOfNumber.push(1);
    }
    for(let i=0; i<this.selectedSize; i++){
      this.board.push(arrayOfNumber);
    }
    this.sizeIsSelected= true;
  }
  
  public clickTile(x: number, y: number):void{
    //console.log(x+' '+y);
    this.board[x][y] = 4;
    console.log(this.board);

  }

}
