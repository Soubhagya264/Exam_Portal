package com.exam.examserver.service.impl;

import com.exam.examserver.model.User;
import com.exam.examserver.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= this.userRepository.findByUsername(username);

        if (user==null){
            throw new UsernameNotFoundException("No User found !");
        }

        return user;
    }
}
