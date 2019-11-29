import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuizListComponent,
    TodoListComponent,
    QuizQuestionComponent,
    QuizItemComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
