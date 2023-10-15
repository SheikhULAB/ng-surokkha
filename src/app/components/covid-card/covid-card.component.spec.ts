import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCardComponent } from './covid-card.component';

describe('CovidCardComponent', () => {
  let component: CovidCardComponent;
  let fixture: ComponentFixture<CovidCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CovidCardComponent]
    });
    fixture = TestBed.createComponent(CovidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
