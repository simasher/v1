import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KapakmatikComponent } from './kapakmatik.component';

describe('KapakmatikComponent', () => {
  let component: KapakmatikComponent;
  let fixture: ComponentFixture<KapakmatikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KapakmatikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KapakmatikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
