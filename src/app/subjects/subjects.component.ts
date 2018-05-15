import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[]

  constructor(private subjectService: SubjectService) {
    this.subjects = []
  }

  ngOnInit() {
    this.getSubjects()
  }

  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe((subjects) => {
        this.subjects = subjects
      })
  }
}
