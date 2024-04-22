import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-with-viewchild',
  templateUrl: './countdown-parent-with-viewchild.component.html',
  styleUrls: ['./countdown-parent-with-viewchild.component.css']
})
export class CountdownParentWithViewchildComponent implements OnInit {

  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds =() => this.timerComponent.seconds,0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

  seconds() {
    return 0;
  }

}
