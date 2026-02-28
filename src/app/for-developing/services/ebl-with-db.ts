import { Injectable } from '@angular/core';
import {Meme} from '../models/meme.model';
import {Memes} from './memes';


@Injectable({
  providedIn: 'root',
})
export class EblWithDb {
  static toLofMemes(json: any): Meme[] {
    return json as Meme[];
  }

}
