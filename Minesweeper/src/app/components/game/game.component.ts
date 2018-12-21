import { Component, OnInit } from '@angular/core';
import { getRandomNumber } from './utils'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public size = new Array(16);

  constructor() { }

  ngOnInit() {
    console.log(getRandomNumber(0, this.size.length))
  }

}
