import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
