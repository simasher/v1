import { TestBed, inject } from '@angular/core/testing';

import { HesapmatikService } from './hesapmatik.service';

describe('HesapmatikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HesapmatikService]
    });
  });

  it('should be created', inject([HesapmatikService], (service: HesapmatikService) => {
    expect(service).toBeTruthy();
  }));
});
