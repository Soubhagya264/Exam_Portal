import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

public user={
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:''
}

  formSubmit(){
    if(this.user.username=='' || this.user.username==null){ 
      this.snack.open('Username is required','',{duration:2000});
      return;
    }

    //adduser: userservice
    this.userService.adduser(this.user).subscribe(
      (res:any)=>{
        Swal.fire('Successfully done !!',`User ${res.username} registered successfully`,'success');
      }, 
      (err)=>{
        //alert(err);
        this.snack.open("Something went wrong !!",'',{duration:3000});
      }
    );

  }
}
function verticalPositon(arg0: string, arg1: string, arg2: { duration: number; }, verticalPositon: any, arg4: string) {
  throw new Error('Function not implemented.');
}

