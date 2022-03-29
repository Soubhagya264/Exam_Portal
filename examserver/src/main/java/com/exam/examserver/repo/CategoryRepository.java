package com.exam.examserver.repo;

import com.exam.examserver.model.Exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository  extends JpaRepository<Category,Long> {
}
