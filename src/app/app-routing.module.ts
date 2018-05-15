import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BatchesComponent } from './batches/batches.component';


const routes: Routes = [
  { path: 'course', component: CoursesComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'teacher', component: TeachersComponent },
  { path: '', component: BatchesComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
