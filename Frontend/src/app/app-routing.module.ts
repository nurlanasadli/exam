import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectRegistrationComponent } from './subjects/subject-registration/subject-registration.component';
import { StudentRegistrationComponent } from './students/student-registration/student-registration.component';
import { ExamRegistrationComponent } from './exams/exam-registration/exam-registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'subject-registration', component: SubjectRegistrationComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'exam-registration', component: ExamRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }