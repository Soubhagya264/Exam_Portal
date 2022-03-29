package com.exam.examserver.controller;


import com.exam.examserver.model.Exam.Category;
import com.exam.examserver.model.Exam.Quiz;
import com.exam.examserver.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {


    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){
        Quiz quiz1=this.quizService.addQuiz(quiz);
        return ResponseEntity.ok(quiz1);

    }

    @GetMapping("/{qid}")
    public Quiz getQuiz(@PathVariable("qid") Long qid){
        return this.quizService.getQuiz(qid);
    }

    @GetMapping("/")
    public ResponseEntity<?> getQuizzes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }


    @GetMapping("/category/{cid}")
    public List<Quiz> qetQuizzesOfCategory(@PathVariable("cid") long cid){
       Category category=new Category();
       category.setCid(cid);
       return this.quizService.getQuizzesOfCategory(category);
    }

    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
        return  ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    // delete category

    @DeleteMapping("/{qid}")
    public void deleteQuiz(@PathVariable("qid")Long quizId){
        this.quizService.deleteQuiz(quizId);
    }
}
