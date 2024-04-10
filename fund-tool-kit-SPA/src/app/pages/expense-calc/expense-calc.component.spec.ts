import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCalcComponent } from './expense-calc.component';

describe('ExpenseCalcComponent', () => {
  let component: ExpenseCalcComponent;
  let fixture: ComponentFixture<ExpenseCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
