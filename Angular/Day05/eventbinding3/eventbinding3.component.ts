import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  name:string='';
  username:string='';
  password:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(){
    console.log("Key Up Event Occurs")
  }

  onKeyDown(){
    console.log("Key Down Event Occurs")
  }

  onEnterKey(myvalue:string){

    console.log("Event Filtering Occur...");

    if(myvalue.length>4){
      alert("Character Limit exceeds...");
    }
  }

  onValidate(inputuser:any,inputpwd:any){
    if(this.username=='' ){
      
      inputuser.style.borderColor='red';
      alert("Please Enter the Username..");
    }else if(this.password==''){
      inputpwd.style.borderColor='red';
      alert("Please Enter the Password..")
    }else{
      alert("Validate successfully...");
      inputpwd.style.borderColor='blue';
      inputuser.style.borderColor='blue';
    }
  }


}
