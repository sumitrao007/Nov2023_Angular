import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  username:string='Ur Default name';
  count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onShowAlert(){
    alert("Hello Welcome "+this.username);
  }

  increment(){
   this.count++;
  }
  decremet(){
      this.count--;
  }



}
