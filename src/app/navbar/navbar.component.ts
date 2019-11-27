import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = '/assets/logo_superquiz.png';
  user = new User({
    name : `Bob l' eponge`,
    email : 'bob@gmail.com',
  });

  constructor() { }

  ngOnInit() {
  }

}
