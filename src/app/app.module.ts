import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { CoursesComponent } from './courses/courses.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavouriteComponent,
    CoursesComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
