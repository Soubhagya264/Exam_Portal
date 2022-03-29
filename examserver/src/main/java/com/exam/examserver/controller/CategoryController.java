package com.exam.examserver.controller;

import com.exam.examserver.model.Exam.Category;
import com.exam.examserver.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category category1=this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);
    }

    //get Category

    @GetMapping("/{categoryId}")
    public  Category getCategory(@PathVariable("categoryId") Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }

    // get all categories

    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    // update category

    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return  this.categoryService.updateCategory(category);
    }

    // delete category

    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId")Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }

}
