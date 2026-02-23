import { Routes } from '@angular/router';
import {Memes} from './pages/memes/memes';
import {MonthMemes} from './pages/month-memes/month-memes';
import {Favorites} from './pages/favorites/favorites';
import {Account} from './pages/account/account';

export const routes: Routes = [
  {
    path: 'memes',
    component: Memes,
  },
  {
    path: 'month_memes',
    component: MonthMemes,
  },
  {
    path: 'favorites',
    component: Favorites,
  },
  {
    path: 'account',
    component: Account,
  }

];
