import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qid: any;
  qtitle: any;
  questions: any;
  index: any[] = [];
  total_length: any;
  page: number = 1;

  constructor(
    private actrotute: ActivatedRoute,
    private _question: QuestionserviceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this.actrotute.snapshot.params['qid'];
    this.qtitle = this.actrotute.snapshot.params['title'];
    this._question.getQuestionsQuiz(this.qid).subscribe(
      (data) => {
        this.questions = data;
        console.log(this.questions);
        // get index of first question
        for (let i = 1; i <= this.questions.length; i++) {
          this.index.push(i);
        
        }
        

        this.total_length = this.questions.length;
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteQuestion(qid: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      this._question.deleteQuestion(qid).subscribe((response) => {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          this.ngOnInit();
          this._router.navigate([
            '/admin/view-questions',
            this.qid,
            this.qtitle,
          ]);
        });
      });
    });
  }
}
