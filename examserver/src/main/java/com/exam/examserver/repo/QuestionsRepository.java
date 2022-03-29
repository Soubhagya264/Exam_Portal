package com.exam.examserver.repo;

import com.exam.examserver.model.Exam.Questions;
import com.exam.examserver.model.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionsRepository extends JpaRepository<Questions,Long> {

    Set<Questions> findByQuiz(Quiz quiz);
}
