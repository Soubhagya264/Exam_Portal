package com.exam.examserver.controller;

import com.exam.examserver.model.Exam.Questions;
import com.exam.examserver.model.Exam.Quiz;
import com.exam.examserver.service.QuestionsService;
import com.exam.examserver.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/questions")
public class QuestionsController {
    @Autowired
    private QuestionsService questionsService;
    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Questions> addQuiz(@RequestBody Questions questions){
        Questions questions1=this.questionsService.addQuestion(questions);
        return ResponseEntity.ok(questions1);

    }

    @PutMapping("/")
    public ResponseEntity<Questions> updateQuestions(@RequestBody Questions question){
        return  ResponseEntity.ok(this.questionsService.updateQuestion(question));
    }


    @GetMapping("/{questionId}")
    public Questions getQuestion(@PathVariable("questionId") Long qid){
        return this.questionsService.getQuestion(qid);
    }

    @GetMapping("/quiz/{qId}")
    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qId") Long qId){
        Quiz quiz=this.quizService.getQuiz(qId);

        Set<Questions>questions=quiz.getQuestionsSet();
        List list =new ArrayList(questions);

        if (list.size()>Integer.parseInt(quiz.getNumberOfQuestions())){
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/quiz/all/{qId}")
    public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qId") Long qId){

        Quiz quiz=new Quiz();
        quiz.setQid(qId);
        Set<Questions> questionsSet=this.questionsService.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(questionsSet);
    }


    @DeleteMapping("/{questionId}")
    public void deleteQuiz(@PathVariable("questionId")Long qId){
        this.questionsService.deleteQuestions(qId);
    }

}
