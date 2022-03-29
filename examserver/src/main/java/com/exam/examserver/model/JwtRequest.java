package com.exam.examserver.model;

public class JwtRequest {
    String username;
    String password;

    public String getUsername() {
        System.out.println("jwt reqst "+username);
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public JwtRequest() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public JwtRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
