package com.exam.examserver.service;

import com.exam.examserver.model.Exam.Category;

import java.util.Set;

public interface CategoryService {
    public Category addCategory(Category category);
    public  Category updateCategory(Category category);
    public Set<Category> getCategories();
    public Category getCategory(Long Cid);
    public void deleteCategory(Long cid);
}
