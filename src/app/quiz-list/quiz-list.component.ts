import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from '../models/quiz';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: []
})
export class QuizListComponent implements OnInit {
  // quizList = QUIZZES associe les deux tableaux
  // quizList = [...QUIZZES] casse le lien et clone le tableau
  quizList = [...QUIZZES]; // indispensable pour rendre les quiz visibles dans le template html

  addQuiz() {
    this.quizList.push(new Quiz(QUIZZES[0]) );
  }

  deleteQuiz() {
    this.quizList.pop();

  }

  constructor() { }

  ngOnInit() {
  }

}
