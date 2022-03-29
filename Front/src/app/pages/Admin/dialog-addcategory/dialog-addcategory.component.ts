import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-addcategory',
  templateUrl: './dialog-addcategory.component.html',
  styleUrls: ['./dialog-addcategory.component.css']
})
export class DialogAddcategoryComponent implements OnInit {

  category = {
    title: '',
    description: '',
  };
  constructor(private _category: CategoryService,private _dialogRef:MatDialogRef<DialogAddcategoryComponent>) {}

  ngOnInit(): void {}

  // this is the function that will be called when the user clicks on the submit button
  formSubmit() {
    if (this.category.title === '' || this.category.description === '') {
      Swal.fire({
        title: 'Blank',
        text: 'Please fill all the fields',
        icon: 'warning',
      });
      return;
    }
    this._category.addCategory(this.category).subscribe(
      (res) => {
        this.category.title='';
        this.category.description='';
        Swal.fire({
          title: 'Success',
          text: 'Category added successfully',
          icon: 'success',
        });
        this._dialogRef.close();
      },
      (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Something went wrong',
          icon: 'error',
        });
      }
    );
  }

}
