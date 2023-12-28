import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core Java",'Advanced Java','Spring Boot','HTML,CSS,JS','Angular 12 ','AWS','Docker'];

  arrObj=[
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:1
    },
    {
      name:'One Plus',
      price:45000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'Vivo',
      price:15000,
      qty:1
    }
  ];

  selected:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over Event Occur...");
    console.log(item);
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
