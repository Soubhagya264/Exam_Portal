package com.exam.examserver.controller;

import com.exam.examserver.model.Exam.Questions;
import com.exam.examserver.model.Exam.Quiz;
import com.exam.examserver.service.QuestionsService;
import com.exam.examserver.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
        List<Questions> list =new ArrayList(questions);

        if (list.size()>Integer.parseInt(quiz.getNumberOfQuestions())){
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
        }
        list.forEach((q) ->{
            q.setAnswer("");
        });
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

    @PostMapping("/eval-quiz")
    public ResponseEntity<?> evalQuiz(@RequestBody List<Questions> questions){
        int marksGot=0;
        int correctAnswer=0;
        int attempted=0;
        int wrongAnswer=0;
        for(Questions q: questions){
         Questions questions1 =this.questionsService.get(q.getQesId());
         if(q.getGivenAnswer()!=null){
         if(questions1.getAnswer().trim().equals(q.getGivenAnswer().trim())){
            correctAnswer++;

            double marksSingle =Double.parseDouble( questions.get(0).getQuiz().getMaxMarks()) / questions.size();
             marksGot += marksSingle;

         }}
            if (q.getGivenAnswer()!=null ) {
                attempted++;
            }
            if (! questions1.getAnswer().trim().equals(q.getGivenAnswer().trim()) &&  ! q.getGivenAnswer().trim().equals("")) {
                wrongAnswer++;
            }
        }
        Map<Object,Object>map=Map.of("marksGot",marksGot,"correctAnswer",correctAnswer,"attempted",attempted,"wrongAnswer",wrongAnswer);
        return ResponseEntity.ok(map);

    }


}
