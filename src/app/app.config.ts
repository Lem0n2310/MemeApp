import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideIndexedDb} from 'ngx-indexed-db';

export const appConfig: ApplicationConfig = {
  providers: [
        provideAnimations(),
        provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
        provideEventPlugins(),
    provideIndexedDb({
      name: 'database',
      version: 1,
      objectStoresMeta: [{
        store: 'rating',
        storeConfig: { keyPath: 'id', autoIncrement: false },
        storeSchema: []
      }]
    })
    ]
};
