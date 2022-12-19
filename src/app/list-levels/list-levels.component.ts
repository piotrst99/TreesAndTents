import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-levels',
  templateUrl: './list-levels.component.html',
  styleUrls: ['./list-levels.component.css']
})
export class ListLevelsComponent {

  constructor(private route: ActivatedRoute) { 
    //console.log('ListLevelsComponent - constructor');
    this.route.params.subscribe(params=>console.log(params));
  }

}
