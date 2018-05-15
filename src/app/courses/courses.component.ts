import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Course'

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

}
