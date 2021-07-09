import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyopiaTrainingComponent } from './myopia-training.component';

describe('MyopiaTrainingComponent', () => {
  let component: MyopiaTrainingComponent;
  let fixture: ComponentFixture<MyopiaTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyopiaTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyopiaTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
