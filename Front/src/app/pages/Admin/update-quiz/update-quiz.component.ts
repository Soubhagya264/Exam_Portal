import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  constructor(
    private _router: ActivatedRoute,
    private _quiz: QuizService,
    private _categoryService: CategoryService,
    private router: Router
  ) {}

  qid: any = 0;
  quiz: any = {};
  categories: any;
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>',
        });
      }
    );

    this.qid = this._router.snapshot.params['qid'];
    this._quiz.getQuizBy(this.qid).subscribe((data) => {
      this.quiz = data;
      console.log(this.quiz);
    });
  }
  // update quiz
  public updateQuiz() {
    this._quiz.updateQuiz(this.quiz).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Quiz updated successfully!',
      }).then(() => {
        this.router.navigate(['/admin/quizes']);
      }
      );
    });
  }
}
