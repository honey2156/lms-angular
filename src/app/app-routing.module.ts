import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BatchesComponent } from './batches/batches.component';
import { LectureComponent } from './lecture/lecture.component';
import { BatchStudentComponent } from './batch-student/batch-student.component';


const routes: Routes = [
  {
    path: 'course', component: CoursesComponent,
    children: [
      { path: ':batchId/lectures', component: LectureComponent },
      { path: ':batchId/students', component: BatchStudentComponent }
    ]
  },
  { path: 'student', component: StudentsComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'teacher', component: TeachersComponent },
  { path: 'home', component: BatchesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
