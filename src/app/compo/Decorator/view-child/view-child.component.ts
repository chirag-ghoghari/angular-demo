import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit{
@ViewChild('txt') textbox?:ElementRef;
ngAfterViewInit(): void {
  const value = this.textbox?.nativeElement.value;
         
}
}
