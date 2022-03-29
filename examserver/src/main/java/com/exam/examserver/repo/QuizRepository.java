package com.exam.examserver.repo;

import com.exam.examserver.model.Exam.Category;
import com.exam.examserver.model.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz,Long> {
    public List<Quiz> findByCategory(Category category);
}
