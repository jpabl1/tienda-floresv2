import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { QueryDocumentSnapshot } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(
      withEventReplay()), 
      provideFirebaseApp(() => initializeApp({
         projectId: "tienda-flores-75e09", 
         appId: "1:1047223096536:web:c24e42769948aef95933ad", 
         storageBucket: "tienda-flores-75e09.firebasestorage.app", 
         apiKey: "AIzaSyC8AMjm9kZuU-3G9DO8KnUTtO2-4iszmcQ", 
         authDomain: "tienda-flores-75e09.firebaseapp.com", 
         messagingSenderId: "1047223096536", 
         measurementId: "G-7L6WZT1P0K" })), 
        provideFirestore(() => getFirestore())]
};
