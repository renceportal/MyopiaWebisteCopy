import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyopiaComponent } from './myopia.component';

describe('MyopiaComponent', () => {
  let component: MyopiaComponent;
  let fixture: ComponentFixture<MyopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyopiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
