import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HesapmatikItem } from '../hesapmatik/hesapmatik.model';
import { HESAPMATIKLER } from '../hesapmatik/mock-hesapmatikler';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HesapmatikService } from '../hesapmatik/hesapmatik.service';

@Component({
  selector: 'app-hesapmatik-panel',
  templateUrl: './hesapmatik-panel.component.html',
  styleUrls: ['./hesapmatik-panel.component.css']
})
export class HesapmatikPanelComponent implements OnInit {



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HesapmatikService,
    //private heroService: HesapmatikService
 ) {}
hesapmatikler: HesapmatikItem[] = [];
//hesapmatikler=HESAPMATIKLER;

currentHesapmatik;

ngOnInit() {

//load
this.service.getHesapmatik().then(hesapmatiklist => this.hesapmatikler = hesapmatiklist);


this.currentHesapmatik = this.route.paramMap.switchMap((params: ParamMap) => this.service.getHesapmatik(params.get(':key')));
    
    
    //this.currentHesapmatik=this.hesapmatikler.find(item=>item.key=='');
}

}
