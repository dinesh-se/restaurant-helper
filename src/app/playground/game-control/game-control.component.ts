import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervelCount = new EventEmitter<number>();
  private intervelObj;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    let count  = 0;
    console.log('game started');
    this.intervelObj = setInterval(() => {
      count += 1;
      this.intervelCount.emit(count);
    }, 1000);
  }

  onEndGame() {
    console.log('game ended');
    clearInterval(this.intervelObj);
  }

}
