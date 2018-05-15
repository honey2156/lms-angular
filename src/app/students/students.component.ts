import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';
import { StudentService } from '../Service/student.service';

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

  addStudent(name:string){
    name = name.trim()
    if (!name) {
      return
    }
    this.studentService.addStudent({ name } as Student)
      .subscribe((student) => {
        this.students.push(student)
        this.getStudents()
      })
  }
}
