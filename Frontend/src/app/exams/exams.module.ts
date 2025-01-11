import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // ReactiveFormsModule-u idxal edin
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';
import { ExamListComponent } from './exam-list/exam-list.component';

@NgModule({
  declarations: [
    ExamRegistrationComponent,
    ExamListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // Burada ReactiveFormsModule-u əlavə edin
  ]
})
export class ExamsModule { }
