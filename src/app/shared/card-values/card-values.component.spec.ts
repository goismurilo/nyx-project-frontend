import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValuesComponent } from './card-values.component';

describe('CardValuesComponent', () => {
  let component: CardValuesComponent;
  let fixture: ComponentFixture<CardValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
