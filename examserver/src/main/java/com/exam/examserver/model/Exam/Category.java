package com.exam.examserver.model.Exam;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name="category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Cid;
    private String title;


    @OneToMany(mappedBy="category",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Quiz>quizes= new LinkedHashSet();

    public Category() {
    }

    public Long getCid() {
        return Cid;
    }

    public void setCid(Long cid) {
        Cid = cid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category(String title, String description) {
        this.title = title;
        this.description = description;
    }

    private  String description;
}
