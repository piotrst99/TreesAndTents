import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXhrBackend, JsonpClientBackend } from '@angular/common/http'
import { Board } from '../models/board';

@Component({
  selector: 'app-load-map',
  templateUrl: './load-map.component.html',
  styleUrls: ['./load-map.component.css']
})
export class LoadMapComponent {

  public selectedFile :any = null;
  public fileWasLoaded: boolean = false;
  public fileIsSelect: boolean = false;
  //public mapFromFile : any;

  constructor() { }

  Load():void{
    console.log('LoadMapComponent - Load');
    this.fileWasLoaded = true;
  }
  
  OnFileSelected(event:any):void{
    console.log('LoadMapComponent - OnFileSelected');
    this.selectedFile = <File>event.target.files[0];
    this.fileIsSelect = true;
    this.fileWasLoaded = false;
  }

}
