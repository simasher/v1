import { Component, Input  } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent { 
  @Input() title: string;
}
