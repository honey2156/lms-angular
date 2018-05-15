import { Component, OnInit } from '@angular/core';
import { Course } from '../Model/Course';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[]

  constructor(private courseService: CourseService) {
    this.courses = []
  }

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe((courses) => {
        this.courses = courses
      })
  }

  addCourse(name: string) {
    name = name.trim()
    if (!name) {
      return
    }
    this.courseService.addCourse({ name } as Course)
      .subscribe((course) => {
        this.courses.push(course)
        this.getCourses()
      })
  }

}
