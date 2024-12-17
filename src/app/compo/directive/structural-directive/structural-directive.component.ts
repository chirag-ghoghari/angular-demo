import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule ,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  //1//
div1_visibale : boolean = true;
div2_visibale : boolean = false;

showdiv1(){
  this.div1_visibale = true;
}
hidediv1(){
  this.div1_visibale = false;
}

//2//
toggalediv2(){
  this.div2_visibale = !this.div2_visibale; // Rit 1
  
  // if (this.div2_visibale == true) {  // Rit 2
  //   this.div2_visibale =false
  // }else{
  //   this.div2_visibale=true
  // }
}

//3//
num1:string='';
num2:string='';

//4//
isactive : boolean = false;

//5//
selectstate:string=''

//       *ngFor       //
cityarray:string[]=['singanpore','katargam' ,'varacha','daholi' ]

student:any[]=[
    {
      studId:11,
      name: "Rahul",
      sarname: "prajapati",
      isactive:false
    },
    {
      studId:22,
      name: "karan",
      sarname: "prajapati",
      isactive:false
    },
    {
      studId:44,
      name: "toni",
      sarname: "prajapati",
      isactive:true
      },
      {
        studId:55,
        name: "monu",
        sarname: "prajapati",
        isactive:false
      }
]
}
