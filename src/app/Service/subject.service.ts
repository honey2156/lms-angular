import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from '../Model/subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SubjectService {

  URL = 'https://fathomless-beyond-55007.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.URL + 'subjects')
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.URL + 'subjects', subject, httpOptions)
  }
}
