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

  constructor() { 
    
  }

  ngOnInit() {
    this.isTarget = this.checkIsTarget()
  }

  checkIsTarget():boolean{
    let targetFlag = false
    this.targets.forEach((element)=>{
      if(element[0] === this.position[0] && element[1] === this.position[1]){
        targetFlag = true;
        return true;
      }
    })
    return targetFlag;
  }

  selected():void{
    (this.isTarget) && alert('LOSE')
  }
  
  countNeighbors(){

  }

}
