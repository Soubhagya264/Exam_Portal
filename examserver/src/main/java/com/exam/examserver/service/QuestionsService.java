package com.exam.examserver.service;

import com.exam.examserver.model.Exam.Questions;
import com.exam.examserver.model.Exam.Quiz;

import java.util.Set;

public interface QuestionsService {
    public Questions addQuestion(Questions questions);

    public Questions updateQuestion(Questions questions);

    public Set<Questions> getQuestions();

    public Questions getQuestion(Long questionId);

    public Set<Questions> getQuestionsOfQuiz(Quiz quiz);

    public void deleteQuestions(Long quesId);

}
