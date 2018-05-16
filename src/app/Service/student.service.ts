import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../Model/student';
import { Batch } from '../Model/batch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

  URL = 'https://fathomless-beyond-55007.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL + 'students')
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.URL + 'students', student, httpOptions)
  }

  enrollStudentInBatch(studentId: number, batchId: number): Observable<any> {
    return this.http.post<any>(this.URL + `students/${studentId}/batches/${batchId}`, httpOptions)
  }

  getStudentBatches(studentId: number): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.URL + `students/${studentId}/batches`)
  }

  getBatchStudents(courseId: number, batchId: number): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL + `courses/${courseId}/batches/${batchId}/students`)
  }


}
