import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor(private _http:HttpClient) { }

  public getQuestionsQuiz(qid:any){
    return this._http.get(`${baseUrl}questions/quiz/all/${qid}`);
  }

  //add a question

  public addQuestion(question:any){
    return this._http.post(`${baseUrl}questions/`,question);
  }

  public deleteQuestion(qid:any){
    return this._http.delete(`${baseUrl}questions/${qid}`);
  }

  public getQuestionsQuizForTest(qid:any){
    return this._http.get(`${baseUrl}questions/quiz/${qid}`);
  }

}
