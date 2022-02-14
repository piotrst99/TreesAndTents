import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BoardComponent {

  public sideSize = 5;
  public matrizSize = this.sideSize * this.sideSize;

  constructor() { }

  ngOnInit(): void {
  }

  createBoard() {
    
    for (let i = 1; i <= this.matrizSize; ++i) {
      let div = document.createElement('div');

      div.classList.add('tiles');
      div.style.float = 'left';
      if (i % this.sideSize === 1) div.style.clear = 'both';

      document.getElementById('board')?.appendChild(div);
    }
  }


}
