import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeacherService } from './teacher.service';
import { StudentService } from './student.service';
import { CourseService } from './course.service';
import { SubjectService } from './subject.service';
import { HttpClientModule } from '@angular/common/http';
import { BatchesComponent } from './batches/batches.component';
import { BatchService } from './batch.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    SubjectsComponent,
    TeachersComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TeacherService, StudentService, CourseService, SubjectService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
