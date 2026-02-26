import { Component } from '@angular/core';
import {Header} from '../../parts-of-pages/header/header';
import {Footer} from '../../parts-of-pages/footer/footer';
import {Container} from '../../parts-of-pages/container/container';

@Component({
  selector: 'app-memes',
  imports: [
    Footer,
    Container,
    Header
  ],
  templateUrl: './memes.html',
  styleUrl: './memes.scss',
})
export class Memes {

}
