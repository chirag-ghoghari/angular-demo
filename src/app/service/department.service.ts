import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor( private http:HttpClient) {}
    getalldept(){
      return this.http.get("http://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
    }
   
}
