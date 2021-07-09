import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorDetailsComponent } from './indoor-details.component';

describe('IndoorDetailsComponent', () => {
  let component: IndoorDetailsComponent;
  let fixture: ComponentFixture<IndoorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
