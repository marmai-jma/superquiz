import { Component, OnInit } from '@angular/core';

import {Question} from '../models/question';
import {Answer} from '../models/answer';
import { Choice } from '../models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit {
  // Question en cours
  question = new Question({
    id: 12,
    title: 'En quelle année AngularJS (première version) est-il sorti ?',
    choices: [
      { text: '2008'},
      { text: '2009', isCorrect: true },
      { text: '2012'},
      { text: '2014'}
    ],
    explanation: 'La version de 2009 est celle développé initialement par Miško Hevery, qui ne travaillait pas encore chez Google.'
  });
  // Réponse en cours (réponse "vierge" pour l'instant)
  answer = new Answer({
    questionId: 12,
    multipleChoicesAllowed: false,
  });
  submitLabel: string;
  submitClass: string;
  isSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    this.isSubmitted = this.answer.isAnswered();
    this.refreshButton();

  }

  clickChoice(choice: Choice) {
    // si réponse déjà soumise, on ne fait rien
    if (this.isSubmitted) {
      return;
    }

    // si le choix est déjà selectionné, on le retire sinon on l'ajoute
    if (this.answer.hasChoice(choice) ){
      this.answer.removeChoice(choice);
    } else {
      this.answer.addChoice(choice);
    }
  }

  submitAnswer(){
    this.isSubmitted = true;
    this.refreshButton();
  }

  refreshButton() {
    // met à jour le libellé et la classe  du bouton "soumettre"
    this.submitLabel = !this.isSubmitted ? 'Soumettre' : this.answer.isCorrect ? 'CORRECT' : 'INCORRECT';
    this.submitClass = !this.isSubmitted ? 'btn-primary': this.answer.isCorrect ? 'btn-success' : 'btn-danger';
  }

  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP() {
    this.question = new Question({
      'id': 35,
      'title': 'Angular est vraiment trop canon.',
      'choices': [
        { 'text': 'Vrai', 'isCorrect': true },
        { 'text': 'Faux'}
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
