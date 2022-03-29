import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css'],
})
export class ViewQuizesComponent implements OnInit {
  quizess: any;

  constructor(private _quiz: QuizService) {}

  ngOnInit(): void {
    this._quiz.quizess().subscribe(
      (data) => {
        this.quizess = data;
      },
      (err) => {
        Swal.fire({
          title: 'Error',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }
  //delete quiz
  deleteQuiz(quizId: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(
      (result) => {
        if (result.value) {
          this._quiz.deleteQuiz(quizId).subscribe(
            (data) => {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              this.ngOnInit();
            },
            (err) => {
              Swal.fire({
                title: 'Error',
                text: err.error.message,
                icon: 'error',
                confirmButtonText: 'Ok',
              });
            }
          );
        }
      },
      (err) => {
        Swal.fire({
          title: 'Error',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }
}
