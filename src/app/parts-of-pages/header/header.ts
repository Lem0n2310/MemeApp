import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TuiButton
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
