import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-registration',
  templateUrl: './subject-registration.component.html',
  styleUrls: ['./subject-registration.component.css']
})
export class SubjectRegistrationComponent implements OnInit {
  subjectForm: FormGroup;
  submittedSubjects: any[] = []; // Qeydiyyatdan keçmiş dərslər üçün array

  constructor(private fb: FormBuilder) {
    this.subjectForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(1)]],
      teacherFirstName: ['', Validators.required],
      teacherLastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.subjectForm.valid) {
      const subjectData = this.subjectForm.value;
      this.submittedSubjects.push(subjectData); // Qeydiyyatdan keçmiş dərsləri əlavə et
      console.log('Dərs Qeydiyyatı:', subjectData);
      this.subjectForm.reset(); // Formu sıfırlamaq
    }
  }
}
