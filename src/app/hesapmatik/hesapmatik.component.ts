import { Component, OnInit, Input } from '@angular/core';
import { HesapmatikItem } from './hesapmatik.model';
import { HESAPMATIKLER } from './mock-hesapmatikler';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HesapmatikService } from './hesapmatik.service';


@Component({
  selector: 'app-hesapmatik',
  templateUrl: './hesapmatik.component.html',
  styleUrls: ['./hesapmatik.component.css']
})

export class HesapmatikComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HesapmatikService,
        //private heroService: HesapmatikService
     ) {}
    hesapmatikler: HesapmatikItem[] = [];
    //hesapmatikler=HESAPMATIKLER;
    
    currentHesapmatik:HesapmatikItem;

    ngOnInit() {

    //load
    this.service.getHesapmatik().then(hesapmatiklist => this.hesapmatikler = hesapmatiklist);

    
    //this.currentHesapmatik = this.route.paramMap.switchMap((params: ParamMap) => this.service.getHesapmatik(params.get('id')));
        
        
        //this.currentHesapmatik=this.hesapmatikler.find(item=>item.key=='');
  }



}
