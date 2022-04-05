package com.exam.examserver.service.impl;

import com.exam.examserver.model.Exam.Questions;
import com.exam.examserver.model.Exam.Quiz;
import com.exam.examserver.repo.QuestionsRepository;
import com.exam.examserver.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionsServiceImpl implements QuestionsService {

    @Autowired
    QuestionsRepository questionsRepository;

    @Override
    public Questions addQuestion(Questions questions) {
        return this.questionsRepository.save(questions);
    }

    @Override
    public Questions updateQuestion(Questions questions) {
        return this.questionsRepository.save(questions);
    }

    @Override
    public Set<Questions> getQuestions() {
        return new HashSet<>(this.questionsRepository.findAll());
    }

    @Override
    public Questions getQuestion(Long questionId) {
        return this.questionsRepository.findById(questionId).get() ;
    }

    @Override
    public Set<Questions> getQuestionsOfQuiz(Quiz quiz) {
        return  this.questionsRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestions(Long quesId) {
        Questions questions=new Questions();
        questions.setQesId(quesId);
        this.questionsRepository.delete(questions);
    }

    @Override
    public Questions get(Long questionId) {
        return this.questionsRepository.getOne(questionId) ;
    }
}
