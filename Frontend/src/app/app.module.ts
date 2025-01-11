import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // ReactiveFormsModule var
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubjectRegistrationComponent } from './subjects/subject-registration/subject-registration.component';
import { StudentRegistrationComponent } from './students/student-registration/student-registration.component';
import { ExamsModule } from './exams/exams.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'; // ExamsModule-u burada idxal edin

@NgModule({
  declarations: [
    AppComponent,
    SubjectRegistrationComponent,
    StudentRegistrationComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ExamsModule // ExamsModule-u burada əlavə edin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
