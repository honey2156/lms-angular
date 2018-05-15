import { Component, OnInit } from '@angular/core';
import { Course } from '../Model/Course';
import { Batch } from '../Model/batch';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[]
  batches: Batch[]
  selectedCourseId: number

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

  getBatchByCourse(course: Course) {
    this.courseService.getBatchByCourseId(course.id)
      .subscribe((batches) => {
        this.batches = batches
      })
  }

  addBatchToCourse(name: string, selectedCourseId:number) {
    if(!selectedCourseId){
      return
    }
    this.courseService.addBatchToCourse({ name } as Batch, selectedCourseId)
      .subscribe((batch) => {
        console.log('added ' + batch.name)
      })
  }

}
