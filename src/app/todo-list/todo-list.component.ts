import { Component, OnInit } from '@angular/core';

interface Todo {
  text: string;
  done: boolean;
}

enum Filter {
  ALL,     // 0
  DONE,    // 1
  NOT_DONE // 2
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // Source de vérité
  todos: Todo[] = [
    {text: 'Mon premier todo', done: false},
    {text: 'Préparer la formation', done: true},
    {text: 'Revoir les bases de JavaScript', done: false},
    {text: 'Passer son permis de chasse', done: false},
    {text: `Because I'm Batman`, done: true},
  ];

  currentFilter: Filter = Filter.ALL;
// propriete = Valeur (pour que l'enumeration Filter soit connue de la classe donc de l'HTML)
  filterEnum = Filter;

  constructor() { }

  ngOnInit() {
  }

  // renvoie ce qu'on affiche
  get todoList() {
     return this.todos.filter ( (todo) => {
      // renvoie true si on veut garder, false si on veut jeter
      if (this.currentFilter === Filter.ALL) {
        return true;
      } else if (this.currentFilter === Filter.DONE) {
        return todo.done;
      } else if (this.currentFilter === Filter.NOT_DONE) {
        return !todo.done;
      }
    });
  }

  filterTodos(filter: Filter){
    this.currentFilter = filter;
  }

  addTodo(newText: string, event: Event) {
    // empecher la soumission du formulaire (evenement par défaut)
    event.preventDefault();
    this.todos.push({text: newText , done: false});  // pas de new Todo car interface, pas classe
  }

  toggleTodo(todo: Todo) {
    // Quick and dirty - on attaque directement l'occurence. (effets de bord)
    // todo.done = ! todo.done;

    // immutabilité - renvoyer tout le tableau
    // On voudrait recréer la liste avec chaque todo à sa bonne valeur
    // On change le done pour le todo de la liste dont le texte correspond au texte du todo en param
      this.todos = this.todos.map(td => {
      return td.text === todo.text ? {...td, done : !td.done} : td;
    });
  }

  deleteTodo(todo: Todo, ev: Event) {
    // Empeche le clic sur la poubelle de déclencher le toggle (effet de bord)
    ev.stopPropagation();

    // cherche l'index du todo à supprimer + Splice
    // const index = this.todos.findIndex(td => td.text === TodoListComponent.text);
    // this.todos.splice(index, 1);

    // Option 2 - Recrée la liste des todos sans le todo à supprimer
    this.todos = this.todos.filter(td => td.text !== todo.text);
  }
}
