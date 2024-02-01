import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message:string='';
  constructor(private service:NotificationService) { }

  ngOnInit(): void {

      this.getDataFromComponent();

  }

  getDataFromComponent(){
    this.service.notification
    .subscribe((data)=>{
        this.message=data;
    })
  }

}
