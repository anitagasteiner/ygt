import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ygt-2ea5b',
        appId: '1:758995639398:web:a6cb2a33be42c69f09a1a7',
        storageBucket: 'ygt-b929c.firebasestorage.app',
        apiKey: environment.googleApiKey,
        authDomain: 'ygt-b929c.firebaseapp.com',
        messagingSenderId: '758995639398'
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};