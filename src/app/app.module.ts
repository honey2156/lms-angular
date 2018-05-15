import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherService } from './Service/teacher.service';
import { StudentService } from './Service/student.service';
import { CourseService } from './Service/course.service';
import { SubjectService } from './Service/subject.service';
import { BatchService } from './Service/batch.service';




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
