import {Component, input} from '@angular/core';
import {Meme} from '../../for-developing/models/meme.model';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiButton, TuiIcon, TuiSurface} from '@taiga-ui/core';


@Component({
  selector: 'app-meme-card',
  imports: [
    TuiPlatform,
    TuiCardLarge,
    TuiSurface,
    TuiButton,
    TuiIcon
  ],
  templateUrl: './meme-card.html',
  styleUrl: './meme-card.scss',
})
export class MemeCard {
  readonly mem = input.required<Meme>();

  liked = false;
  disliked = false;


  toggleLike(): void {
    this.liked = !this.liked;

    if (this.liked) {
      this.disliked = false;
    }
  }

  toggleDislike(): void {
    this.disliked = !this.disliked;

    if (this.disliked) {
      this.liked = false;
    }
  }
}
