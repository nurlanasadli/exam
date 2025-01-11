import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRegistrationComponent } from './subject-registration.component';

describe('SubjectRegistrationComponent', () => {
  let component: SubjectRegistrationComponent;
  let fixture: ComponentFixture<SubjectRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectRegistrationComponent]
    });
    fixture = TestBed.createComponent(SubjectRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
