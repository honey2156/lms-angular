import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[]

  constructor(private studentService: StudentService) {
    this.students = []
  }

  ngOnInit() {
    this.getStudents()
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe((students) => {
        this.students = students
      })
  }
}
