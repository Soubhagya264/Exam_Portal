package com.exam.examserver.service.impl;

import com.exam.examserver.model.Exam.Category;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;
import com.exam.examserver.repo.RoleRepository;
import com.exam.examserver.repo.UserRepository;
import com.exam.examserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    // creating user
    @Override
    public User creatUser(User user, Set<UserRole> userRoles) throws Exception {
        User local= this.userRepository.findByUsername(user.getUsername());
        if (local!=null){
            System.out.println("User is already there");
            throw new Exception("User already present");
        }
        else {
           for(UserRole ur:userRoles){
              roleRepository.save(ur.getRole());
           }
           user.getUserRoles().addAll(userRoles);
           local=this.userRepository.save(user);
        }
        return  local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

    @Override
    public Set<User> getUsers() {
        return new LinkedHashSet<>(this.userRepository.findAll());
    }
}
