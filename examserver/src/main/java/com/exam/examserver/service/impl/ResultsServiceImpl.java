package com.exam.examserver.service.impl;

import com.exam.examserver.model.Exam.Results;
import com.exam.examserver.model.User;
import com.exam.examserver.repo.ResultsRepository;
import com.exam.examserver.service.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
@Service
public class ResultsServiceImpl implements ResultsService {

    @Autowired
    ResultsRepository resultsRepository;



    public Results addResult(Results results){
        return resultsRepository.save(results);
    }

    @Override
    public Set<Results> getResultsOfUser(User user) {
        return this.resultsRepository.findByUser(user);
    }

    @Override
    public List<Results> getResults() {
        return new ArrayList<>(this.resultsRepository.findAll());
    }
}
