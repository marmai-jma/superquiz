import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appName = 'SuperQuiz';

// affichage d'un tableau
  prenoms: string[] = ['Damien' , 'Mohamed' , 'Jean-Marc', 'Johane'];

  constructor() {

    setTimeout(() => this.prenoms.push('Antoine'), 2000);
   }

  ngOnInit() {
  }

}
