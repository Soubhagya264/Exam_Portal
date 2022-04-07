package com.exam.examserver.controller;

import com.exam.examserver.model.Role;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;
import com.exam.examserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")

public class UserController {
    // creating user
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
        Set<UserRole> roles=new HashSet<>();

        user.setProfile("default.png");
        // encoding password
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Role role=new Role();

        role.setRoleId(45L);
        role.setRoleName("Normal");

        UserRole userRole=new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        roles.add(userRole);


        return this.userService.creatUser(user,roles);
    }




    @GetMapping("/{username}")
    public  User getUser(@PathVariable("username") String username){
      return this.userService.getUser(username);
    }

    @DeleteMapping("/{userId}")
    public  void deleteUser(@PathVariable("userId") Long userId){
        this.userService.deleteUser(userId);
    }

    @GetMapping("/all-users")
    public ResponseEntity<?> getUsers(){
        return ResponseEntity.ok(this.userService.getUsers());
    }

    @GetMapping("/test")
    public String test(){
        return "Welcome to backend API";
    }



}
