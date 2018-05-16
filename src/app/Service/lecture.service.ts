import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Lecture } from '../Model/lecture';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LectureService {

  URL = 'https://fathomless-beyond-55007.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  getLecturesByBatch(batchId: number): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.URL + `courses/${batchId}/batches/${batchId}/lectures`)
  }

  addLecture(lecture: Lecture, batchId: number): Observable<Lecture> {
    return this.http.post<Lecture>(this.URL + `courses/${batchId}/batches/${batchId}/lectures`, lecture, httpOptions)
  }

}
