import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
//string ,number , boolen , date //

courseName: string ="angular 18";
statename: string ="c";
inputetype = "radio"

myclass: string ="bg-danger";
firstname = signal("chirag")
curentdate : Date = new Date();

constructor(){

}
changecoursename(){
  this.courseName = "reactjs";
  this.firstname.set("fgsjgjfgjsd")
}
showAlert(massage:string){
  alert(massage)
}
}
