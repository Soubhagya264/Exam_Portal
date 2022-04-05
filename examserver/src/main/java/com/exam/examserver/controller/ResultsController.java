package com.exam.examserver.controller;

import com.exam.examserver.model.Exam.Questions;
import com.exam.examserver.model.Exam.Results;
import com.exam.examserver.model.User;
import com.exam.examserver.service.ResultsService;
import com.exam.examserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/results")
public class ResultsController {
    @Autowired
    UserService userService;
    @Autowired
    ResultsService resultsService;

    @PostMapping("/")
    public ResponseEntity<Results> addResults(@RequestBody Results results){
        System.out.println(results.toString());
        System.out.println(results.getAttempted());
        Results results1=this.resultsService.addResult(results);
        return ResponseEntity.ok(results1);

    }


    @GetMapping("/all/{uId}")
    public ResponseEntity<?> getResultsOfUser(@PathVariable("uId") Long uId){
        User user=new User();
        user.setId(uId);
        Set<Results> resultsSet=this.resultsService.getResultsOfUser(user);
        return ResponseEntity.ok(resultsSet);
    }
}
