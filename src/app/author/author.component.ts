import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  template: ' <input #email (keyup.enter) = "onKeyUp(email.value)"/>',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  isActive = true;


  constructor(service: AuthorService) {
    this.authors = service.getAuthors()
   }

  ngOnInit(): void {
  }
  onSave(){
    console.log("button clicked")
  }
  onKeyUp(email){
    console.log("email ="+email);
  }

}
