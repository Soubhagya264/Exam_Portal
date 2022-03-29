import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData = {

  username :"",
  password:"",
}

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router ) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.loginData);
    if(this.loginData.username == "" || this.loginData.username == null){
      this.snack.open("Username is required", "", {duration:3000});
      return;
    }
    if(this.loginData.password == "" || this.loginData.password == null){
      this.snack.open("Password is required", "", {duration:3000});
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (res:any)=>{
        
        
        console.log(res);
        this.login.loginUser(res.token);
        this.login.getCurrntUser().subscribe(
          (res:any)=>{
            this.login.setUser(res);
            console.log(res);

        // redirect to Admin Dashboard
        console.log("user role "+this.login.getUserRole());
        if(this.login.getUserRole()=="Admin"){
          this.router.navigate(['admin']);
          this.login.loginStatusSub.next(true);
          //window.location.href="/admin";
        }else if(this.login.getUserRole()=="Normal"){
          this.router.navigate(['user-dashboard/0']);
          this.login.loginStatusSub.next(true);
          //window.location.href="/user-dashboard";
        }else{
          this.login.logout();

        }
          }
        );
        
      },
      (err:any)=>{
        this.snack.open("Invalid username or password", "", {duration:3000});
      }
    );


  }

}
