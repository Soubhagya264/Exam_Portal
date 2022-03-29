import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };
  constructor(private _category: CategoryService) {}

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
