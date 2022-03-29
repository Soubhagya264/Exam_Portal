import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddcategoryComponent } from './dialog-addcategory.component';

describe('DialogAddcategoryComponent', () => {
  let component: DialogAddcategoryComponent;
  let fixture: ComponentFixture<DialogAddcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
