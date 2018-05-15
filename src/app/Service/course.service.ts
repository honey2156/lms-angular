import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from '../Model/Course';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/api/courses')
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('http://localhost:8080/api/courses', course, httpOptions)
  }
}
