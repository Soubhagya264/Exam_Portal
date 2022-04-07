import { Component, OnInit } from '@angular/core';
import { ResultservicesService } from 'src/app/services/resultservices.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private _user:UserService) { }
  user:any;
  result:any;
  dataSource:any;
  displayedColumns:any;
  ngOnInit(): void {
    this._user.getAllUsers().subscribe(
      res=>{
        this.user=res;
      },
      err=>{
        console.log(err);
      }
    )

    this.displayedColumns = ['User Name', 'First Name', 'Last Name', 'Role Name'];
     
  
    }}
