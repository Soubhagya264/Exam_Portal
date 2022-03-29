package com.exam.examserver.repo;

import com.exam.examserver.model.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz,Long> {
}
