import { Component, OnInit } from '@angular/core';
import { Subject } from '../Model/subject';
import { SubjectService } from '../Service/subject.service';

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

  addSubject(name: string) {
    name = name.trim()
    if (!name) {
      return
    }
    this.subjectService.addSubject({ name } as Subject)
      .subscribe((subject) => {
        this.subjects.push(subject)
        this.getSubjects()
      })
  }
}
