package com.exam.examserver;
import com.exam.examserver.model.Role;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;
import com.exam.examserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Driver;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;
	public static void main(String[] args) {

		SpringApplication.run(ExamserverApplication.class, args);

	}


	@Override
	public void run(String... args) throws Exception {
       	System.out.println("Starting Code");
//		User user=new User();
//		user.setFirstName("Abc");
//		user.setLastName("Def");
//		user.setUsername("abcde123");
//		user.setPassword("aabbcc");
//		user.setEmail("abcd@gmail.com");
//		user.setProfile("default.png");
//		user.setPhone("1234567890");
//
//		Role role1 = new Role();
//		role1.setRoleId(43L);
//		role1.setRoleName("Admin");
//
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.creatUser(user,userRoleSet);
//		System.out.println(user1.getUsername());

	}
}
