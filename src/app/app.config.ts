import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental';

const queryClient = new QueryClient();

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAngularQuery(queryClient)
  ]
};
