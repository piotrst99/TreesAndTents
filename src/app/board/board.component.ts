import { Component, ViewEncapsulation } from '@angular/core';

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

  public topCountofTents: number[] = [2, 0, 1, 1, 1];
  public leftCountofTents: number[] = [1, 1, 0, 2, 1];

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

  public datas: number[] = [];

  public levelIsEnd = false;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  reset(): void {
    this.newGame();
  }

  newGame() {
    //this.datas = this.items;

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
    if (this.datas[val] != 3) {
      this.datas[val] += 1;
    }
    else {
      this.datas[val] = 1;
    }
  }

  check(): void {

    let countOfPutTents = 0;
    this.datas.forEach((element, index, items) => {
      if(element == 3)
        countOfPutTents++;
    });

    if(countOfPutTents == 5){
      let isCorrect = 0;
  
      this.correctLvl.forEach((element, index, items) => {
        if (this.datas[index] != this.correctLvl[index]) {
          //alert('Incorrect');
        }
        else {
          isCorrect++;
        }
      });
  
      isCorrect == this.datas.length ? this.levelIsEnd = true : false;
      
      return;

    }

    this.levelIsEnd = false;

  }

  back(): void {

  }

}
