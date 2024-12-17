import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PipePipe } from '../pipes/pipe.pipe';

@Component({
  selector: 'app-pipe',
  imports: [JsonPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,PipePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstname='this is a pipe';
  curentdate :Date = new Date();

  student: any={
    name:'cng',
    city:'surat',
    gender:'male',
    state:'',

  }
}
