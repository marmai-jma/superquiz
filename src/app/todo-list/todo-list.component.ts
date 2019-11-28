import { Component, OnInit } from '@angular/core';

interface Todo {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    {text: 'Mon premier todo', done: false},
    {text: 'Préparer la formation', done: true},
    {text: 'Revoir les bases de JavaScript', done: false},
    {text: 'Passer son permis de chasse', done: false},
    {text: `Because I'm Batman`, done: true},
  ];

  addTodo(newText: string, event: Event) {
    // empecher la soumission du formulaire (evenement par défaut)
    event.preventDefault();
    this.todos.push({text: newText , done: false});  // pas de new Todo car interface, pas classe
  }

  toggleTodo(todo: Todo){
    // Quick and dirty - on attaque directement l'occurence. (effets de bord)
    // todo.done = ! todo.done;

    // immutabilité - renvoyer tout le tableau
    // On voudrait recréer la liste avec chaque todo à sa bonne valeur
    // On change le done pour le todo de la liste dont le texte correspond au texte du todo en param
      this.todos = this.todos.map(td => {
      return td.text === todo.text ? {...td, done : !td.done} : td;
    });
  }

  deleteTodo() {}

  constructor() { }

  ngOnInit() {
  }

}
