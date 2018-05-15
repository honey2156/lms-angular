import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../Model/batch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchService {

  constructor(private http: HttpClient) { }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>('http://localhost:8080/api/batches')
  }
}
