import { Injectable } from '@angular/core';
import {Meme} from '../models/meme.model';


@Injectable({
  providedIn: 'root',
})
export class EblWithDb {
  static toLofMemes(json: any): Meme[] {
    return json as Meme[];
  }



}
