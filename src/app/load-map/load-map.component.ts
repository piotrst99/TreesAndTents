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
  public fileIsSelected: boolean = false;
  public mapFromFile : any;

  constructor() { }

  Load():void{
    
    /*fetch(this.selectedFile).
      then(response=>response.text()).
        then(data => {
          console.log(data);
        });*/

    //LoadMap2(this.selectedFile);
    //console.log(this.jsonFile);
    //const fd = new FormData();
    //fd.append('file',this.selectedFile, this.selectedFile.name); 
    /*http.get(this.selectedFile,{responseType:'text'}).
        subscribe(data=>console.log(data));*/


    
    //this.http.post("localhost:4200",fd);
    //console.log(this.selectedFile.name);
    //console.log(fd);   
    //console.log(this.selectedFile);
    //let loadedMap: Board = JSON.parse(JSON.stringify(this.selectedFile));
    //console.log(loadedMap);

    
    /*let fileReader = new FileReader();
    fileReader.onload = (e) => {
      //console.log(fileReader.result);
      let loadedMap :Board = JSON.parse(JSON.stringify(fileReader.result));
      //console.log(loadedMap);
      this.mapFromFile = loadedMap;
    }
    fileReader.readAsText(this.selectedFile);
    */
    this.fileIsSelected = true;

  }
  
  OnFileSelected(event:any):void{
    this.selectedFile = <File>event.target.files[0];
    //console.log(this.selectedFile);
  }

}
