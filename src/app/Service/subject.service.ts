import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from '../Model/subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>('http://localhost:8080/api/subjects')
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>('http://localhost:8080/api/subjects', subject, httpOptions)
  }
}
