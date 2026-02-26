import { Component } from '@angular/core';
import {MemeCard} from '../meme-card/meme-card';

@Component({
  selector: 'app-container',
  imports: [
    MemeCard
  ],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {

}
