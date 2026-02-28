import {Component, input, signal} from '@angular/core';
import {MemeCard} from '../meme-card/meme-card';
import {Meme} from '../../for-developing/models/meme.model';

@Component({
  selector: 'app-container',
  imports: [
    MemeCard
  ],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {
  readonly list = input.required<Meme[]>();
}
