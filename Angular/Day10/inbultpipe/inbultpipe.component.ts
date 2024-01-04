import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbultpipe',
  templateUrl: './inbultpipe.component.html',
  styleUrls: ['./inbultpipe.component.css']
})
export class InbultpipeComponent implements OnInit {

  strdetails="Hopes so u R understand angular 12 Module by Sumit raokhande";
  num2:number=-452.78956324557;
  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
