import { UserOptions } from './user-options';

/**
 * @file
 * A user logged into the application.
 */

// Créer la classe User ici.
export class User {
  name: string;
  email: string;
  photo: string;
  active: boolean;

  constructor(options: UserOptions) {
    this.name = options.name;
    this.email = options.email;
    this.photo = options.photo || ''; // marche bien pour chaines et chiffres pas pour boolean
    this.active = options.active === undefined ? true : options.active;
  }
}
