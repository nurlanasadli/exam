import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRegistrationComponent } from './exam-registration.component';

describe('ExamRegistrationComponent', () => {
  let component: ExamRegistrationComponent;
  let fixture: ComponentFixture<ExamRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamRegistrationComponent]
    });
    fixture = TestBed.createComponent(ExamRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
