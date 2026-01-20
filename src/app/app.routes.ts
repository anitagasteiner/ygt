import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';
import { Board } from './components/board/board';

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'board', component: Board }
];
