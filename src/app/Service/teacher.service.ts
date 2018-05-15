import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../Model/teacher'
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('http://localhost:8080/api/teachers')
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>('http://localhost:8080/api/teachers', teacher, httpOptions)
  }
}
