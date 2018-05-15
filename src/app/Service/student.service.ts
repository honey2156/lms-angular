import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../Model/student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/api/students')
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8080/api/students', student, httpOptions)
  }

}
