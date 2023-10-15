import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassComponent } from './registration-pass.component';

describe('RegistrationPassComponent', () => {
  let component: RegistrationPassComponent;
  let fixture: ComponentFixture<RegistrationPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPassComponent]
    });
    fixture = TestBed.createComponent(RegistrationPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
