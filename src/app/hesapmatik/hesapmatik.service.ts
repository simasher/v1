import { Injectable } from '@angular/core';
import { HesapmatikItem } from './hesapmatik.model';
import { HESAPMATIKLER } from './mock-hesapmatikler';

@Injectable()
export class HesapmatikService {

  constructor() { }
  
  getHesapmatik(key:string="") {
    return Promise.resolve(HESAPMATIKLER);
  }
}
