import { Component, OnInit, Input } from '@angular/core';
import { HesapmatikComponent } from '../hesapmatik.component';
import { HESAPMATIKLER } from '../mock-hesapmatikler';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  hesapmatikler=HESAPMATIKLER;

  ngOnInit() {}

 
}
