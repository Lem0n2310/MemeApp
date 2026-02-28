import {Component, computed, Input, input, signal} from '@angular/core';
import {Meme} from '../../for-developing/models/meme.model';

@Component({
  selector: 'app-meme-card',
  imports: [],
  templateUrl: './meme-card.html',
  styleUrl: './meme-card.scss',
})
export class MemeCard {
  readonly mem = input.required<Meme>();
}
