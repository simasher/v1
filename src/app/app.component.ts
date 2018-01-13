import { Component } from '@angular/core';
import * as $ from 'jquery';
import { HesapmatikService } from './hesapmatik/hesapmatik.service';
//declare var jquery:any;
//declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HesapmatikService ]

})
export class AppComponent {
  title = 'icradestek';
}
