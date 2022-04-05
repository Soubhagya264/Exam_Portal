import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptedQuizzesComponent } from './attempted-quizzes.component';

describe('AttemptedQuizzesComponent', () => {
  let component: AttemptedQuizzesComponent;
  let fixture: ComponentFixture<AttemptedQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptedQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptedQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
