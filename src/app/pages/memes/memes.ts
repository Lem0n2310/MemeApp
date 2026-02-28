import {Component, signal} from '@angular/core';
import {Header} from '../../parts-of-pages/header/header';
import {Footer} from '../../parts-of-pages/footer/footer';
import {Container} from '../../parts-of-pages/container/container';
import * as database from "../../database/database.json"
import {EblWithDb} from '../../for-developing/services/ebl-with-db';

@Component({
  selector: 'app-memes',
  imports: [
    Footer,
    Container
  ],
  templateUrl: './memes.html',
  styleUrl: './memes.scss',
})
export class Memes {
    json = database.allMemes;
    readonly list = signal(EblWithDb.toLofMemes(this.json));
}
