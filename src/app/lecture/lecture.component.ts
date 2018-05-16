import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecture } from '../Model/lecture';
import { LectureService } from '../Service/lecture.service';
import { Batch } from '../Model/batch';
import { BatchService } from '../Service/batch.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  lectures: Lecture[]
  batch: Batch

  constructor(
    private lectureService: LectureService,
    private route: ActivatedRoute,
    private batchService: BatchService) {
    this.lectures = []
  }

  ngOnInit() {
    this.getBatchId()
  }

  getBatchId() {
    this.route.params.subscribe((params) => {
      if (params.batchId) {
        this.getBatchById(params.batchId)
        this.getLecturesByBatch(params.batchId)
      }
    })
  }

  getBatchById(batchId: number) {
    this.batchService.getBatchById(batchId)
      .subscribe((batch) => {
        if (batch) {
          this.batch = batch
        }
      })
  }


  getLecturesByBatch(batchId: number) {
    this.lectureService.getLecturesByBatch(batchId)
      .subscribe((lectures) => {
        this.lectures = lectures
      })
  }

  addLecture(name: string) {
    name = name.trim()
    if (!name) {
      return
    }
    this.lectureService.addLecture({ name } as Lecture, this.batch.id)
      .subscribe((lecture) => {
        console.log('added successfully ' + lecture.name)
        this.getLecturesByBatch(this.batch.id)
      })
  }

}
