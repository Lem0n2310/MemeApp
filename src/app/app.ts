import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './parts-of-pages/header/header';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private dbService: NgxIndexedDBService) { }
  protected readonly title = signal('taiga-app');
  ngOnInit() {
      this.dbService.add('database', {})
    }

}
