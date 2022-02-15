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
  public datas: number[] = [1, 1, 1, 1, 1,
                          1, 0, 1, 0, 1,
                          1, 1, 1, 1, 1,
                          0, 0, 1, 1, 1,
                          1, 1, 1, 1, 0];

  levelIsEnd = false;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  reset(): void {
    this.newGame();
  }

  newGame() {
    this.createBoard();
    this.squares = Array(this.matrizSize).fill(null);
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
    //console.log(val);
    console.log(document.getElementsByClassName('tile')[val]);
    if(this.datas[val]!=3){
      this.datas[val]+=1;
      if(this.datas[val] == 2){
        let div = document.getElementsByClassName('tile')[val];
        div.className = 'grass tile';
        console.log(div);
        console.log(val);
        console.log(this.datas[val]);
        //document.getElementsByClassName('tile')[val].classList.remove('blackGround');
        //document.getElementsByClassName('tile')[val].classList.add('grass');
      }
    }
    else{
      this.datas[val] = 1;
      document.getElementsByClassName('tile')[val].classList.remove();
      document.getElementsByClassName('tile')[val].classList.add('blackGround');
    }
  }


}
