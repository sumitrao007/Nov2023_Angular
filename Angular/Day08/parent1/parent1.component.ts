import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strdata:string='Welcome to Angular 12 Module...';

  jsonObj={
    fname:'Sumit',
    lname:'Raokhande',
    id:9
  }
num!:number;



  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.num=9;
  }

}
