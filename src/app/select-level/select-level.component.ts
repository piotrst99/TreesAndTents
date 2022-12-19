import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css']
})
export class SelectLevelComponent{

  //public boardSizes: string[] = ['5 x 5', '6 x 6', '7 x 7'];
  public boardSizes = [
    {id:1, size:'5x5'}, 
    {id:2, size:'6x6'},
    {id:3, size:'7x7'}
  ];

  public selectedSize: string = '';
  //public index: number = 0;
  public levelName: string = '';
  public levelURL = '';

  public levels: string[] = [];
  public levelIsSelected: boolean = false;

  selectBoardSize(event: any): void{
    //console.log('SelectLevelComponent - selectBoardSize');
    //console.log(event);
    //console.log(event);
    import('../../assets/LevelList.json').then(m => {
      this.levels = m.default[event];
      //console.log(this.levels);
      //this.selectedSize = this.selectedSize.replace(/\s/g,"");
    });
    //this.route.params.subscribe(params=>console.log(this.selectedSize.replace(/\s/g,"")));
    //this.route.navigate
  }

  sel(val: any):void{
    //console.log(val);
  }

  /*selectLevel(nr: number):void{
    //console.log(this.levels[nr]);
    this.levelName = this.levels[nr];
    this.levelIsSelected= true;
    this.selectedSize = this.selectedSize.replace(/\s/g,"");
    //this.levelURL = this.selectedSize+'_Level'+(nr+1);
    //this.levelURL = 'Level'+(nr+1)+'_5x5';
    //console.log(this.levelURL);
    //console.log(this.selectedSize+'_Level'+(nr+1));
  }*/

  backToMenu(): void{
    //console.log('SelectLevelComponent - backToMenu');
    this.levelIsSelected = false;
  }

  constructor(private route: ActivatedRoute) { 
    //this.route.params.subscribe(params=>console.log(this.selectedSize));
  }

}
