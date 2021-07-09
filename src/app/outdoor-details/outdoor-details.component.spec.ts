import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorDetailsComponent } from './outdoor-details.component';

describe('OutdoorDetailsComponent', () => {
  let component: OutdoorDetailsComponent;
  let fixture: ComponentFixture<OutdoorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
