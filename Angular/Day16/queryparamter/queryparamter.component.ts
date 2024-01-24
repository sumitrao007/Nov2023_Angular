import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparamter',
  templateUrl: './queryparamter.component.html',
  styleUrls: ['./queryparamter.component.css']
})
export class QueryparamterComponent implements OnInit {

  json={
    id:0,
    fname:'',
    status:''
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.json.id=param.get("id");
      this.json.fname=param.get("fname");
      this.json.status=param.get("status");
    })
  }

}
