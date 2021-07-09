import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileWorkingDetailsComponent } from './while-working-details.component';

describe('WhileWorkingDetailsComponent', () => {
  let component: WhileWorkingDetailsComponent;
  let fixture: ComponentFixture<WhileWorkingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhileWorkingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileWorkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
