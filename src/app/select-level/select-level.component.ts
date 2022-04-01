import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css']
})
export class SelectLevelComponent{

  public boardSizes: string[] = ['5 x 5', '6 x 6', '7 x 7'];
  public selectedSize: string = '';
  //public index: number = 0;
  public levelName: string = '';

  public levels: string[] = [];
  public levelIsSelected: boolean = false;

  selectBoardSize(event: any): void{
    import('../../assets/LevelList.json').then(m => {
      this.levels = m.default[this.selectedSize];
    });
  }

  selectLevel(nr: number):void{
    //console.log(this.levels[nr]);
    this.levelName = this.levels[nr];
    this.levelIsSelected= true;
    this.selectedSize = this.selectedSize.replace(/\s/g,"");
  }

  backToMenu(): void{
    this.levelIsSelected = false;
  }

  constructor() { }

}
