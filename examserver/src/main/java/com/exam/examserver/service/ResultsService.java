package com.exam.examserver.service;

import com.exam.examserver.model.Exam.Results;
import com.exam.examserver.model.User;

import java.util.List;
import java.util.Set;

public interface ResultsService {
    public Results addResult(Results results);
    public Set<Results> getResultsOfUser(User user);
    public List<Results> getResults();
}
