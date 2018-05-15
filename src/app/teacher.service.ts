import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('http://localhost:8080/api/teachers')
  }
}
