import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories: any;

  quiz_data: any = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: '',
    },
  };
  constructor(
    private _categoryService: CategoryService,
    private _quizService: QuizService,
    private router: Router
  
  ) {}

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
  }
  addQuiz() {
    if (
      this.quiz_data.title == '' ||
      this.quiz_data.title == null ||
      this.quiz_data.description == '' ||
      this.quiz_data.maxMarks == '' ||
      this.quiz_data.numberOfQuestions == '' ||
      this.quiz_data.category.cid == ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields!',
      });
      return;
    }
    this._quizService.addQuiz(this.quiz_data).subscribe(
      (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Quiz Added Successfully!',
          text: '',
        }).then(() => {
          this.router.navigate(['/admin/quizes']);
        }
        );
        this.quiz_data = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          Category: {
            cid: '',
          },
        };
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }


  
}
