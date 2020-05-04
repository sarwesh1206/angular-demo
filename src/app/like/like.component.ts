import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
@Input()likeCount: number;
  constructor() { }

  ngOnInit(): void {
  }
  isClicked(){
    this.likeCount += 1;
  }

}
