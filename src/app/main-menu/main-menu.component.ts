import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  
  public boardSizes: string[] = ['5 x 5', '6 x 6'];
  public selectedSize: string = '';
  //public index: number = 0;

  public levels: string[] = [];

  public showLevels():void{
    
  }

  selectBoardSize(event: any): void{
    import('../../assets/LevelList.json').then(m => {
      this.levels = m.default[this.selectedSize];
    });
  }

  constructor() { }


}
