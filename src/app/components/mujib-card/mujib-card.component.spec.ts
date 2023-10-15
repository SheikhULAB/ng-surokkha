import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujibCardComponent } from './mujib-card.component';

describe('MujibCardComponent', () => {
  let component: MujibCardComponent;
  let fixture: ComponentFixture<MujibCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MujibCardComponent]
    });
    fixture = TestBed.createComponent(MujibCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
