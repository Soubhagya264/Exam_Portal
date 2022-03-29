import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizess(){
    return this._http.get(`${baseUrl}quiz/`)
  }
  public addQuiz(quiz:any){
    return this._http.post(`${baseUrl}quiz/`,quiz);
  }
  // delete quiz
  public deleteQuiz(quizId: any){
    return this._http.delete(`${baseUrl}quiz/${quizId}`);
  }

  // update quiz

  public updateQuiz(quiz:any){
    return this._http.put(`${baseUrl}quiz/`,quiz);
  }

  // get quiz by id
  public getQuizBy(quizId: any){
    return this._http.get(`${baseUrl}quiz/${quizId}`);
  }

  // get quizzes of category
  public getQuizzesOfCategory(catId: any){
    return this._http.get(`${baseUrl}quiz/category/${catId}`);
  }

}
