import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { BatchService } from './Service/batch.service';
import { CourseService } from './Service/course.service';
import { StudentService } from './Service/student.service';
import { SubjectService } from './Service/subject.service';
import { TeacherService } from './Service/teacher.service';
import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    SubjectsComponent,
    TeachersComponent,
    BatchesComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TeacherService, StudentService, CourseService, SubjectService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
