import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
catId:any;
quizzes:any;
  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private snack:MatSnackBar
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.catId = params['catId'];
      if(this.catId==0){
        this._quiz.quizess().subscribe(
  
          data=>{
            this.quizzes=data;
          });
  
    }
    else{
      this._quiz.getQuizzesOfCategory(this.catId).subscribe(
        data=>{
          this.quizzes=data;
        },
        err=>{
          this.snack.open("No quizzes available",'',{duration:3000});
        }

      );

  
    }
    });
    
    
}}
