import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  @Input() targets:any[];
  @Input() position:any[];
  
  public isTarget:boolean
  public neighborTargets:number = 0;
  constructor() { 
    
  }

  ngOnInit() {
    this.isTarget = this.checkIsTarget(this.position)
  }

  checkIsTarget(position):boolean{
    let targetFlag = false
    this.targets.forEach((element)=>{
      if(element[0] === position[0] && element[1] === position[1]){
        targetFlag = true;
        return true;
      }
    })
    return targetFlag;
  }

  selected():void{
    (this.isTarget) ? alert('You lose!!!') : this.getNeighbors();
  }
  
  getNeighbors():void{
    let neighbors = [
      [this.position[0]-1, this.position[1]-1],
      [this.position[0]-1, this.position[1]],
      [this.position[0]-1, this.position[1]+1],

      [this.position[0], this.position[1]-1],
      [this.position[0], this.position[1]+1],  
      
      [this.position[0]+1, this.position[1]-1],
      [this.position[0]+1, this.position[1]],
      [this.position[0]+1, this.position[1]+1],      
    ];

    this.countNeighborsTargets(neighbors);
  }

  countNeighborsTargets(neighbors):void{
    let count = 0
    neighbors.forEach((neighbor)=>{
      count = (this.checkIsTarget(neighbor)) ? count + 1 : count 
    })
    this.neighborTargets = (count > 0) ? count : -1;
  }

}
