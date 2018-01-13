import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapmatikPanelComponent } from './hesapmatik-panel.component';

describe('HesapmatikPanelComponent', () => {
  let component: HesapmatikPanelComponent;
  let fixture: ComponentFixture<HesapmatikPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapmatikPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapmatikPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
