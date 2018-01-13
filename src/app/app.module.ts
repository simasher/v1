import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { AlertModule } from 'ngx-bootstrap';
import { HesapmatikComponent } from './hesapmatik/hesapmatik.component';

import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { SidenavComponent } from './hesapmatik/sidenav/sidenav.component';

import { DevExtremeModule } from 'devextreme-angular';
import { HomePageComponent } from './home-page/home-page.component';
import { KapakmatikComponent } from './kapakmatik/kapakmatik.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { HesapmatikPanelComponent } from './hesapmatik-panel/hesapmatik-panel.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Anasayfa' } },
  { 
      path: 'hesapmatik/:key', 
      component: null, 
      data: { title: 'Hesapmatik' },
      outlet: 'hesap'
  },
  { path: 'hesapmatik', 
      component: HesapmatikComponent, 
      data: { title: 'Hesapmatik' },
      
      children: [
        {
            path: ':key',
            component: HesapmatikPanelComponent,
            outlet: 'sidebar'
        }        
    ]
 },
  { path: 'kapakmatik', component: KapakmatikComponent, data: { title: 'Kapakmatik' } },
  { path: '**', component: PathNotFoundComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HesapmatikComponent,
    PathNotFoundComponent,
    SidenavComponent,
    HomePageComponent,
    KapakmatikComponent,
    PageFooterComponent,
    HesapmatikPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    DevExtremeModule
  ],
  exports: [
    HesapmatikComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
