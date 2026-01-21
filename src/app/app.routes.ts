import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';
import { Board } from './components/board/board';
import { HealthInsurances } from './components/health-insurances/health-insurances';

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'board', component: Board },
    { path: 'health-insurances', component: HealthInsurances }
];
