import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas harum praesentium sequi laudantium! Ab quidem ipsum ullam, ut ex esse, veniam magnam, laudantium laborum beatae cupiditate eligendi laboriosam reprehenderit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas harum praesentium sequi laudantium! Ab quidem ipsum ullam, ut ex esse, veniam magnam, laudantium laborum beatae cupiditate eligendi laboriosam reprehenderit.';
  constructor() { }

  ngOnInit(): void {
  }

}
