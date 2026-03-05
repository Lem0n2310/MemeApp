import {Component, signal} from '@angular/core';
import {Footer} from "../../parts-of-pages/footer/footer";
import {Meme} from '../../for-developing/models/meme.model';
import {EblWithDb} from '../../for-developing/services/ebl-with-db';
import * as database from '../../database/database.json';


@Component({
  selector: 'app-month-memes',
    imports: [
      Footer
    ],
  templateUrl: './month-memes.html',
  styleUrl: './month-memes.scss',
})
export class MonthMemes {


}
