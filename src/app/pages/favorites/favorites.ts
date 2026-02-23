import { Component } from '@angular/core';
import {Container} from "../../parts-of-pages/container/container";
import {Footer} from "../../parts-of-pages/footer/footer";
import {Header} from "../../parts-of-pages/header/header";

@Component({
  selector: 'app-favorites',
    imports: [
        Container,
        Footer
    ],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {

}
