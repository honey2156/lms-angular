import { Component, OnInit } from '@angular/core';
import { Batch } from '../Model/batch';
import { Student } from '../Model/student';
import { StudentService } from '../Service/student.service';
import { ActivatedRoute } from '@angular/router';
import { BatchService } from '../Service/batch.service';

@Component({
  selector: 'app-batch-student',
  templateUrl: './batch-student.component.html',
  styleUrls: ['./batch-student.component.css']
})
export class BatchStudentComponent implements OnInit {

  batch: Batch
  students: Student[]
  batchStudents: Student[]

  constructor(
    private studentService: StudentService,
    private batchService: BatchService,
    private route: ActivatedRoute) {

    this.students = []
    this.batchStudents = []
  }

  ngOnInit() {
    this.getBatchId()
    this.getStudents()
  }

  getBatch() {
    this.route.params.subscribe((params) => {
      this.getBatchById(params.batchId)
    })

  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe((students) => {
        this.students = students
      })
  }

  getBatchId() {
    this.route.params.subscribe((params) => {
      if (params.batchId) {
        this.getBatchById(params.batchId)
        this.getBatchStudents(params.batchId)
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

  getBatchStudents(batchId: number) {
    this.studentService.getBatchStudents(batchId, batchId)
      .subscribe((students) => {
        this.batchStudents = students
      })
  }

  enrollStudentInBatch(studentId: number) {
    if (studentId && this.batch.id) {
      this.studentService.enrollStudentInBatch(studentId, this.batch.id)
        .subscribe(() => {
          alert('successfully enrolled')
          this.getBatchStudents(this.batch.id)
        })
    }
  }

}
