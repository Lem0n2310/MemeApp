import { Component } from '@angular/core';
import {Container} from "../../parts-of-pages/container/container"
import {Footer} from "../../parts-of-pages/footer/footer";
import {Header} from "../../parts-of-pages/header/header";
import * as database from '../../database/database.json';

@Component({
  selector: 'app-favorites',
    imports: [
        Footer
    ],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  json = database.allMemes;
}
