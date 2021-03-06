import { Component, OnInit, Input } from '@angular/core';
import { getRandomNumber } from './utils'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  private size = 16; //tamalo de la grilla 16x16 por ej.
  private sizeTargets = this.size * 3; //Numero de bombas
  public celd = new Array(this.size);
  public targets = new Array(this.sizeTargets);

  constructor() { 
    this.setTargets();
  }

  ngOnInit() {
    
  }

  setTargets(){
    for(let i=0; i < this.targets.length;i++){
      this.targets[i] = [getRandomNumber(0, this.size), getRandomNumber(0, this.size)]
    }
  }

}
