import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapmatikComponent } from './hesapmatik.component';

describe('HesapmatikComponent', () => {
  let component: HesapmatikComponent;
  let fixture: ComponentFixture<HesapmatikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapmatikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapmatikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
