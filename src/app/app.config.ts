import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ygt-b929c',
        appId: '1:758995639398:web:a6cb2a33be42c69f09a1a7',
        storageBucket: 'ygt-b929c.firebasestorage.app',
        apiKey: 'AIzaSyD2X_P91IXP5_DwAOjmXm-n2ePifg3MSK0',
        authDomain: 'ygt-b929c.firebaseapp.com',
        messagingSenderId: '758995639398'
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};