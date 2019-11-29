import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Choice } from '../models/choice';


@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})

export class QuizQuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() answer: Answer;


  submitLabel: string;
  submitClass: string;
  isSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    this.isSubmitted = this.answer.isAnswered();
    this.refreshButton();
  }

  clickChoice(choice: Choice) {
    if (this.isSubmitted) {
      return;
    }
    // Si le choix est déjà selectionné, on le retire
    if (this.answer.hasChoice(choice)) {
      this.answer.removeChoice(choice);
    } else {
      this.answer.addChoice(choice);
    }
  }

  submitAnswer() {
    this.isSubmitted = true;
    this.refreshButton();
  }

  // Met à jour le libellé du bouton
  refreshButton() {
    this.submitLabel = !this.isSubmitted ? 'Soumettre' :
this.answer.isCorrect ? 'CORRECT' : 'INCORRECT';
    this.submitClass = !this.isSubmitted ? 'btn-primary' :
this.answer.isCorrect ? 'btn-success' : 'btn-danger';
  }

  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP() {
    this.question = new Question({
      'id': 35,
      'title': 'Angular est vraiment trop canon.',
      'choices': [
        { 'text': 'Vrai', 'isCorrect': true },
        { 'text': 'Faux' }
      ],
      'explanation': 'À ce stade, comment ne pas en être persuadé ? 😝'
    });
    this.answer = new Answer({
      questionId: 35,
      multipleChoicesAllowed: false
    });
    this.ngOnInit();
  }
}