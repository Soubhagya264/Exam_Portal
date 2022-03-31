import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid:any;
  question:any;
  constructor(private LocationSt: LocationStrategy,
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _ques:QuestionserviceService,
    private snack:MatSnackBar,
    private router:Router) { }
  
vidioRef:any;
  ngOnInit(): void {
    this.vidioRef = document.getElementById('vidio');



    this.preventBackButton();
    this.fullscreen();
    this.setupCamera();
    this.qid=this._route.snapshot.params['qid'];
    this.loadQuestion();
  }
  setupCamera(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false}).then(stream=>{
      this.vidioRef.srcObject = stream;
      this.vidioRef.play();
    }
    ).catch(err=>{
      console.log(err);
    });
  }
  elem = document.documentElement;
  fullscreen(){
   
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    }
  }
  



  preventBackButton(){
    history.pushState(null,  location.href);
    this.LocationSt.onPopState(()=>{
      history.pushState(null,  location.href);
    });
  }
  loadQuestion(){
    this._ques.getQuestionsQuizForTest(this.qid).subscribe(
      data=>{
        this.question=data;
        console.log(data);
      },
      err=>{
        this.snack.open("No questions available",'',{duration:3000});
      }
    );

  }

  
  

}
