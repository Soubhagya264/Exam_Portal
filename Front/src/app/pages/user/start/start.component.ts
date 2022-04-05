import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ResultservicesService } from 'src/app/services/resultservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  qid: any;
  question: any;
  questions: any;
  result:any;
  res_data: any;
  
  isSubmit = false;
  user: any;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;

  constructor(
    private LocationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _ques: QuestionserviceService,
    private snack: MatSnackBar,
    private router: Router,
    private login_:LoginService ,
    private _result:ResultservicesService,
    
  ) {}

  vidioRef:any;
  ngOnInit(): void {
    this.vidioRef = document.getElementsByClassName("video");
    console.log(this.vidioRef);

    this.preventBackButton();
    this.fullscreen();
    this.setupCamera();
    this.qid = this._route.snapshot.params['qid'];
    this.loadQuestion();
  }
  setupCamera() {
    this.vidioRef=document.getElementsByClassName("video");
    
    navigator.mediaDevices.getUserMedia({
      video:{width:300,height:300},
      audio:false
    }).then(stream=>{
      console.log(stream)
      this.vidioRef.srcObject=stream;
      this.vidioRef.play();
      
      
    })
  
    
  }
  elem = document.documentElement;
  fullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    }
  }

  preventBackButton() {
    history.pushState(null, location.href);
    this.LocationSt.onPopState(() => {
      history.pushState(null, location.href);
    });
  }
  loadQuestion() {
    this._ques.getQuestionsQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.question = data;
        this.value = this.question.length * 2 * 60;
        console.log(data);
        
        console.log(this.question);
        this.StartTimer();
      },
      (err) => {
        this.snack.open('No questions available', '', { duration: 3000 });
      }
    );
  }

  StartTimer() {
    var timer = setInterval(() => {
      this.value--;
      if (this.value == 0) {
        clearInterval(timer);
        if (this.isSubmit==false) {
         
        
        this._ques.evalQuiz(this.question).subscribe(
          (data: any)=>{
            console.log(data);
          },
          error =>
          console.error(error)
        )
      }}
    }, 1000);
  }

  // evalQuiz() {
  //   this.question.forEach((q: any) => {
  //     if (q.givenAnswer == q.answer) {
  //       this.correctAnswer++;
  //       let marksSingle = this.question[0].quiz.maxMarks / this.question.length;
  //       this.marksGot += marksSingle;
  //     }
  //     if (q.givenAnswer.trim() != '') {
  //       this.attempted++;
  //     }
  //     if (q.givenAnswer != q.answer && q.givenAnswer.trim() != '') {
  //       this.wrongAnswer++;
  //     }
  //   });
  // }

  getFormattedTime() {
    let mm: any = Math.floor(this.value / 60);
    let ss: any = this.value - mm * 60;
    return `${mm} min :${ss} sec`;
  }

  submitQuiz() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit the quiz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!',
    }).then((result) => {
      if (result.value) {
        this.isSubmit = true;
        this._ques.evalQuiz(this.question).subscribe(
          (data: any)=>{
            console.log("Map Data")
            console.log(data);
            this.questions = data;
            this.result = data;
            this.result['percentage'] = (data.marksGot / this.question[0].quiz.maxMarks) * 100;
            this.result['quizName']=this.question[0].quiz.title;
            this.result['quizCategory']=this.question[0].quiz.category.title;
            this.result['user']={}
            this.result.user['id']=this.user.id;
            this.result['totalMarks']=this.question[0].quiz.maxMarks;
            this._result.addResult(this.result).subscribe(
              (data:any)=>{
                console.log(data);
                
                
              }
            )
          },
          error =>
          console.error(error)
        )
        this.user=this.login_.getUser();
      }
    });
  }
}
