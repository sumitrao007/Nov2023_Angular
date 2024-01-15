import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any[]=[];

  id:number=0;
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
      this.service.getPost()
      .subscribe((response:any)=>{
        console.log(response);
        this.post=response;
      },(error)=>{
        // alert("Error Occured...")

        if(error.status>=400 || error.status<=499){
          alert("Client Side Error Occured.. "+error.status);
        }else if(error.status>=500 || error.status<=599){
          alert("Something went wrong in the server...")
        }else{
          alert("Something Problem Occured...")
        }


      });
  }

  onSend(mytitle:any,mybody:any){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.Postdata(obj)
      .subscribe((response)=>{
        console.log(response)
      });

  }

  onEdit(item:any){
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onDelete(id:any){
    this.service.deleteData(id)
    .subscribe((response)=>{
      console.log(response);
    });
  }

}
