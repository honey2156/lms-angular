import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';
import { StudentService } from '../Service/student.service';
import { Batch } from '../Model/batch'
import { BatchService } from '../Service/batch.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[]
  batches: Batch[]
  selectedStudent: Student

  constructor(private studentService: StudentService, private batchService: BatchService) {
    this.students = []
  }

  ngOnInit() {
    this.getStudents()
    this.getBatches()
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe((students) => {
        this.students = students
      })
  }

  getBatches() {
    this.batchService.getBatches()
      .subscribe((batches) => {
        this.batches = batches
      })
  }

  onSelect(student: Student) {
    this.selectedStudent = student
  }

  addStudent(name: string) {
    name = name.trim()
    if (!name) {
      return
    }
    this.studentService.addStudent({ name } as Student)
      .subscribe((student) => {
        this.students.push(student)
        this.getStudents()
      })
  }

  enrollStudentInBatch(studentId: number, batchId: number) {
    if (studentId && batchId) {
      this.studentService.enrollStudentInBatch(studentId, batchId)
        .subscribe(() => {
          alert('successfully enrolled')
        })
    }
  }
}
