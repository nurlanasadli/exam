import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentForm: FormGroup;
  submittedStudents: any[] = []; // Qeydiyyatdan keçmiş şagirdlər üçün array

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      this.submittedStudents.push(studentData); // Qeydiyyatdan keçmiş şagirdləri əlavə et
      console.log('Şagird Qeydiyyatı:', studentData);
      this.studentForm.reset(); // Formu sıfırlamaq
    }
  }
}
