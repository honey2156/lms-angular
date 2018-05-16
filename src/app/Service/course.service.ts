import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from '../Model/Course';
import { Batch } from '../Model/batch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {

  URL = 'https://fathomless-beyond-55007.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.URL + 'courses')
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.URL + 'courses', course, httpOptions)
  }

  getBatchByCourseId(courseId: number): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.URL + 'courses/' + courseId + '/batches')
  }

  addBatchToCourse(batch: Batch, courseId: number): Observable<Batch> {
    return this.http.post<Batch>(this.URL + 'courses/' + courseId + '/batches', batch, httpOptions)
  }
}
