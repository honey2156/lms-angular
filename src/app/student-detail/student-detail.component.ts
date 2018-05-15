import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../Model/student'
import { Batch } from '../Model/batch';
import { StudentService } from '../Service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: Student
  batches: Batch[]

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  getStudentBatches(studentId: number) {
    this.studentService.getStudentBatches(studentId)
      .subscribe((batches) => {
        this.batches = batches
      })
  }

}
