import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  message='';
  intervalId = 0;
  seconds = 11;


  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start(){
    this.countDown();
  }

  stop(){
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} Seconds`
  }

  private countDown(){
    this.clearTimer();
    this.intervalId = window.setInterval(()=>{
      this.seconds -=1; 
      if ( this.seconds === 0) {
        this.message = 'Blast Off!'
      } else if(this.seconds < 0){
        this.seconds = 10;
        this.message = `T-${this.seconds} seconds and counting`; 
      }

    }, 1000);

  }

  ngOnDestroy(){
    this.clearTimer();
  }
}
