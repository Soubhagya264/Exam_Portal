import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  categories:any;
  constructor(private _cat:CategoryService,private snack:MatSnackBar,public login:LoginService) { }

  ngOnInit(): void {
    this._cat.getCategories().subscribe(
      data=>{
        this.categories=data;
      },
      err=>{
        this.snack.open("Error","Close",{duration:3000});
      }
    )

  }

  public logout(){
    this.login.logout();
    
    window.location.reload();
  }

}
