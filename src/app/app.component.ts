import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  post ={
    title: "Title",
    isFavourite: false
  };
  like = {
    likeCount: 1
  };

  isFavouriteChanged(isFavourite){
    console.log("Favourite clicked"+ isFavourite)
  }
}
