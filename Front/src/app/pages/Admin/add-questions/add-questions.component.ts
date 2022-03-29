import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
})
export class AddQuestionsComponent implements OnInit {
  
 public Editor = ClassicEditor;
  qid: any;
  qtitle: any;
  question = {
    quiz: {
      qid: null,
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _questionService: QuestionserviceService
  ) { }

  ngOnInit(): void {
    this.qid = this._activatedRoute.snapshot.params['qid'];
    this.qtitle = this._activatedRoute.snapshot.params['title'];
    if (this.qid) {
      this.question.quiz['qid'] = this.qid;
    }
  }

  //form submit

  formSubmit() {
    if (
      this.question.content.trim() == '' ||
      this.question.option1.trim() == '' ||
      this.question.option2.trim() == '' ||
      this.question.option3.trim() == '' ||
      this.question.option4.trim() == '' ||
      this.question.answer.trim() == ''
    ) {
      return;
    }

    this._questionService.addQuestion(this.question).subscribe((response) => {
      Swal.fire({
        title: 'Success',
        text: 'Question added successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then((result) => {
        this._router.navigate(['/admin/view-questions', this.qid, this.qtitle]);
      });
    });
  }


  
}
