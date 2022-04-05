package com.exam.examserver.model.Exam;

import com.exam.examserver.model.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Results {
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int resId;

    public Results() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }



    public int getResId() {
        return resId;
    }

    public void setResId(int resId) {
        this.resId = resId;
    }

    public int getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(int correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public int getAttempted() {
        return attempted;
    }

    public void setAttempted(int attempted) {
        this.attempted = attempted;
    }

    public int getWrongAnswer() {
        return wrongAnswer;
    }

    public void setWrongAnswer(int wrongAnswer) {
        this.wrongAnswer = wrongAnswer;
    }

    public double getPercentage() {
        return percentage;
    }

    public void setPercentage(double percentage) {
        this.percentage = percentage;
    }

    public String getQuizName() {
        return QuizName;
    }

    public void setQuizName(String quizName) {
        QuizName = quizName;
    }

    private int correctAnswer;
    private int attempted;
    private int wrongAnswer;
    private double percentage;
    private int totalMarks;



    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date LastUpdate;

    @PrePersist
    private void onCreate(){
        LastUpdate=new Date();
    }

    public Date getLastUpdate() {
        return LastUpdate;
    }

    public String getQuizCategory() {
        return QuizCategory;
    }

    public void setQuizCategory(String quizCategory) {
        QuizCategory = quizCategory;
    }

    private String QuizCategory;

    public Results(User user, int resId, int correctAnswer, int attempted, int wrongAnswer, double percentage, int totalMarks, String quizCategory, double marksGot, String quizName) {
        this.user = user;
        this.resId = resId;
        this.correctAnswer = correctAnswer;
        this.attempted = attempted;
        this.wrongAnswer = wrongAnswer;
        this.percentage = percentage;
        this.totalMarks = totalMarks;
        QuizCategory = quizCategory;
        this.marksGot = marksGot;
        QuizName = quizName;
    }

    private double marksGot;

    public double getMarksGot() {
        return marksGot;
    }

    public void setMarksGot(double marksGot) {
        this.marksGot = marksGot;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(int totalMarks) {
        this.totalMarks = totalMarks;
    }

    private String QuizName;



}
