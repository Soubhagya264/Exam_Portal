import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qid: any;
  quizzes:any;

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private snack:MatSnackBar,
    private router:Router

  
  ) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this._quiz.getQuizBy(this.qid).subscribe(
      data=>{
        console.log(data);
        this.quizzes=data;
      },
      err=>{
        this.snack.open("No quiz available",'',{duration:3000});
      }
    );

  }
  StartQuiz(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to start the quiz?",
      showCancelButton: true,
      confirmButtonColor: 'accent',
      cancelButtonColor: 'danger',
      confirmButtonText: 'Yes, start it!',
      icon:'info'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/start/'+this.qid]);
      }
    }
    ),
    ()=>{
      this.snack.open("No quiz available",'',{duration:3000});
    }

  }


}
