import {Component, input} from '@angular/core';
import {Meme} from '../../for-developing/models/meme.model';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiButton, TuiIcon, TuiSurface} from '@taiga-ui/core';
import {EblWithDb} from '../../for-developing/services/ebl-with-db';


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
    if (!this.liked) {
      this.mem().likes++;
      EblWithDb.LSreplace(this.mem().id, '1')
    }
    else {
      this.mem().likes--;
      EblWithDb.LSreplace(this.mem().id, '0')
    }

    this.liked = !this.liked;

    if (this.liked) {
      if (this.disliked) {
        EblWithDb.LSreplace(this.mem().id, '1');
      }
      this.disliked = false;
    }
  }

  toggleDislike(): void {
    if (!this.disliked) {
      this.mem().likes--;
      EblWithDb.LSreplace(this.mem().id, '-1');
    }
    else {
      this.mem().likes++;
      EblWithDb.LSreplace(this.mem().id, '0');
    }

    this.disliked = !this.disliked;

    if (this.disliked) {
      if (this.liked) {
        EblWithDb.LSreplace(this.mem().id, '-1');
      }

      this.liked = false;
    }
  }
}
