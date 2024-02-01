import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

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

  mymsg:string='';

  constructor(private route:ActivatedRoute,
              private service:NotificationService) { }

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getDataemitted();
  }

  getDataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.json.id=param.get("id");
      this.json.fname=param.get("fname");
      this.json.status=param.get("status");
    })
  }

  getDataemitted(){
      this.service.notification
      .subscribe((data)=>{
          this.mymsg=data;
      })
  }

  onSend(msg:string){
      this.service.sendMessage(msg);
  }

}
