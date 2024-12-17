import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj:any={
    firstname:'',
    lastname:'',
    username:'',
    city:'',
    state:'',
    zip:'',
    isAcceptTerms:false
  }

  formvalue:any;

  onsubmit(){
    debugger;
    this.formvalue = this.studentObj;
  }
}
