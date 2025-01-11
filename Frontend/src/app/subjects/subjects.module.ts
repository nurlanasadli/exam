import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectRegistrationComponent } from './subject-registration/subject-registration.component';
import { SubjectListComponent } from './subject-list/subject-list.component';



@NgModule({
  declarations: [
    SubjectRegistrationComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubjectsModule { }
