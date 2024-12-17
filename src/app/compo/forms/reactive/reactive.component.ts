import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  student:FormGroup =new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl(""),
    username:new FormControl(""),
    city:new FormControl(""),
    state:new FormControl(""),
    zipcode:new FormControl(""),
    isAccessterm:new FormControl(""),
  });
formvalue:any;  
  onsave(){
    this.formvalue =this.student.value;
  }
}
