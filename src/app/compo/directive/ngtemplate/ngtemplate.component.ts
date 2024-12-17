import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {
 
  test:boolean= false;

  data=[
    {name:'a',age:21},
    {name:'b',age:11},
    {name:'c',age:31},
    {name:'d',age:25},
  ]
}
