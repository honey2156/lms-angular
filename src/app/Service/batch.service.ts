import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../Model/batch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchService {

  URL = 'https://fathomless-beyond-55007.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.URL + 'batches')
  }

  getBatchById(batchId: number): Observable<Batch> {
    return this.http.get<Batch>(this.URL + `batches/${batchId}`)
  }
}
