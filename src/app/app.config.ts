import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Captura errores globales del navegador
    provideZonelessChangeDetection(), // Detección de cambios sin Zone.js
    provideRouter(routes), // Registra el sistema de rutas - Importante
    provideHttpClient() // Permite hacer peticiones HTTP.
  ]
};
