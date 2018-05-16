import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchStudentComponent } from './batch-student.component';

describe('BatchStudentComponent', () => {
  let component: BatchStudentComponent;
  let fixture: ComponentFixture<BatchStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
