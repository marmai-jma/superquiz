import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, FooterComponent, HomeComponent, QuizListComponent],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
