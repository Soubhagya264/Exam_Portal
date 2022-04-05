package com.exam.examserver.repo;


import com.exam.examserver.model.Exam.Results;
import com.exam.examserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Set;

public interface ResultsRepository extends JpaRepository<Results,Long> {
    Set<Results> findByUser(User user);
}
