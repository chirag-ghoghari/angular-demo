import { Component , OnInit,DoCheck,AfterContentChecked,AfterContentInit,OnDestroy,OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  imports: [  ],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent  implements OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,OnDestroy,OnChanges{
    
  firstname:string;

  constructor() {
    console.log('constructor called');
      this.firstname = "";
  }
  ngOnInit(): void {    // Component load hone ke turant run hota hai  &  page load karte time apko koi work karva na hai to ap ngOnit me karva skte ho
    console.log('ngOnInit called'); 
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
}
