import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { isReactive } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
 //            [ngclass]            // 
 //1//
 div1_colore : string = 'bg-primary';


 redclass(){
this.div1_colore = "bg-danger";
 }
 blueclass(){
this.div1_colore = "bg-primary"
 }
 

 //2//
 isdiv2_colore :boolean = false;
 
 toggalcolore(){
  this.isdiv2_colore = !this.isdiv2_colore;
 }
 //3//
 num1:string='';
num2:string='';

//4//
isactive: boolean=true;


//           [ngstyle]            //
student:any[]=[
{studid:11,totalmarks:40,gender:'male',name:'sonu',city:'surat',isactive:false},
{studid:22,totalmarks:60,gender:'male',name:'tina',city:'mumbai',isactive:true},
{studid:55,totalmarks:56,gender:'femal',name:'mina',city:'ahmdabad',isactive:false},
{studid:17,totalmarks:20,gender:'male',name:'mona',city:'jamnager',isactive:true},
{studid:15,totalmarks:89,gender:'femal',name:'hina',city:'bhavnager',isactive:true},
{studid:85,totalmarks:33,gender:'femal',name:'karina',city:'vapi',isactive:false}
]


customstyle:any={
'height':'200px',
'width':'200px',
'background-color':'red',
}
}




