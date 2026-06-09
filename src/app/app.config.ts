import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Captura errores globales del navegador
    provideZonelessChangeDetection(), // Detección de cambios sin Zone.js
    provideRouter(routes) // Registra el sistema de rutas - Importante
  ]
};
