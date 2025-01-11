import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent {
  examForm: FormGroup;
  exams: any[] = []; // Exam məlumatları üçün array

  constructor(private fb: FormBuilder) {
    this.examForm = this.fb.group({
      subjectCode: ['', [Validators.required, Validators.maxLength(3)]],
      studentId: ['', [Validators.required, Validators.maxLength(5)]],
      examDate: ['', [Validators.required]],
      grade: ['', [Validators.required, Validators.max(10), Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.examForm.valid) {
      const examData = this.examForm.value;
      this.exams.push(examData); // Qeydiyyatdan keçən imtahanı əlavə et

      // Formu sıfırlayın
      this.examForm.reset();
      console.log(this.exams); // Konsolda yoxlamaq üçün
    }
  }
}
