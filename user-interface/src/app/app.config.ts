import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule),importProvidersFrom(FormsModule),FormsModule, provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};

