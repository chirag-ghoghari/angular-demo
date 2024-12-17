import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../ReusebleComponent/alert/alert.component';


@Component({
  selector: 'app-postapi',
  imports: [FormsModule,AlertComponent],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent implements OnInit {

  ngOnInit(): void {
    this.getdepartment();
  }

  http = inject(HttpClient);

  // constructor(private deptser:DepartmentService) { }

  deptObj:any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": "",
  };
  depart:any[]=[];
//post API
  onsave(){
    debugger;
   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{    
   // debugger;
      if(res.result){
        alert('departmant creat sucsessfully')
      }else{
        alert(res.massage)
      }
   })
   }

//Get API
getdepartment(){

   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.depart = res.data;
   })
   }
// getdepartment(){
//   debugger;
//   this.deptser.getalldept().subscribe((res:any)=>{
//     debugger;
//     this.depart =res.data;
//   })
// }
//Update API

onedit(data:any){     // edit button mate   
  this.deptObj=data;
}

onupdate(){   
  debugger;
 this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{    debugger;
    if(res.result){
      alert('departmant update sucsessfully')
    }else{
      alert('res.massage')
    }
 })
 }

//Delete API
ondelete(id:number){
  const isdelete=confirm("are you sure delte recrd");
  if(isdelete){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{    
      debugger;
      if(res.result){
        alert('departmant delete sucsessfully')
      }else{
        alert('res.massage')
      }
   })
  }
  }
  
}