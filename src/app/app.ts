import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './parts-of-pages/header/header';
import { Footer } from './parts-of-pages/footer/footer';
import { Container } from './parts-of-pages/container/container';
import {Memes} from './pages/memes/memes';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, RouterOutlet, Header, Memes],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('taiga-app');
}
