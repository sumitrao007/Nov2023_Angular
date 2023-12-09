import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  imgUrl:string='../../assets/bg6.jpg';

  num:number=4;

  constructor() { }

  ngOnInit(): void {
  }

}
