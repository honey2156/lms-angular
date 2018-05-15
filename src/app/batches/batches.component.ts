import { Component, OnInit } from '@angular/core';
import { Batch } from '../Model/batch'
import { BatchService } from '../Service/batch.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  batches: Batch[]

  constructor(private batchService: BatchService) {
    this.batches = []
  }

  ngOnInit() {
    this.getBatches()
  }

  getBatches() {
    this.batchService.getBatches()
      .subscribe((batches) => {
        this.batches = batches
      })
  }

}
