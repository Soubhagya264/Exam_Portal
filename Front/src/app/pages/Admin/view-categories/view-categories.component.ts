import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { DialogAddcategoryComponent } from '../dialog-addcategory/dialog-addcategory.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
categories:any;
  constructor(private category:CategoryService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.category.getCategories().subscribe((data:any)=>{
      this.categories=data; 
      },
      (err)=>{
        console.log(err);
        Swal.fire("Error !! ",err.error.message,"error");
      }
      );
    }

    openDialog() {
      
      const dialogRef = this.dialog.open(DialogAddcategoryComponent,{
        width:'35%'});
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

}}
