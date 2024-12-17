import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../../ReusebleComponent/alert/alert.component';
import { custumclass } from '../../Model/class/custumclass';
import { InterUser } from '../../Model/Interface/InterUser';

@Component({
  selector: 'app-getapi',
  imports: [AlertComponent],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {
//  http = inject(HttpClient);  // Rit no 1 API call karva mate 
userlist:InterUser[]=[];
carelist:custumclass[]=[];

 constructor (private http:HttpClient){ // Rit no 2 API call karva mate  

 }
 getalluser(){
  debugger;
 this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  debugger;
    this.userlist = res;
 })
 }
 carelists(){
  debugger;
 this.http.get("http://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any)=>{
  debugger;
    this.carelist = res.data;
 },Error=>{  // error heandle kar ne ke liya 
  debugger;
 })
 }
}
