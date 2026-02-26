import { Component } from '@angular/core';
import {Container} from "../../parts-of-pages/container/container";
import {Footer} from "../../parts-of-pages/footer/footer";

@Component({
  selector: 'app-month-memes',
    imports: [
        Container,
        Footer
    ],
  templateUrl: './month-memes.html',
  styleUrl: './month-memes.scss',
})
export class MonthMemes {

}
