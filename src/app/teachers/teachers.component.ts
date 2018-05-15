import { Component, OnInit } from '@angular/core';
import { Teacher } from '../Model/teacher'
import { TeacherService } from '../Service/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[]

  constructor(private teacherService: TeacherService) {
    this.teachers = []
  }

  ngOnInit() {
    this.getTeachers()
  }

  getTeachers() {
    this.teacherService.getTeachers()
      .subscribe((teachers) => {
        this.teachers = teachers
      })
  }
  
  addTeacher(name: string) {
    name = name.trim()
    if (!name) {
      return
    }
    this.teacherService.addTeacher({ name } as Teacher)
      .subscribe((teacher) => {
        this.teachers.push(teacher)
        this.getTeachers()
      })
  }

}
