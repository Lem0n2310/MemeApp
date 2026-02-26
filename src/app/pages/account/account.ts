import { Component } from '@angular/core';
import {Footer} from '../../parts-of-pages/footer/footer';
import {Header} from '../../parts-of-pages/header/header';

@Component({
  selector: 'app-account',
  imports: [
    Footer
  ],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {

}
