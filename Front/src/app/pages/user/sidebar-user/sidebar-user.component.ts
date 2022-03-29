import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  categories:any;
  constructor(private _cat:CategoryService,private snack:MatSnackBar) { }

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

}
