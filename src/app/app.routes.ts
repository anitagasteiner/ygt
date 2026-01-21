import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';
import { Board } from './components/board/board';
import { HealthInsurances } from './components/health-insurances/health-insurances';
import { RunningCosts } from './components/running-costs/running-costs';

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'board', component: Board },
    { path: 'health-insurances', component: HealthInsurances },
    { path: 'running-costs', component: RunningCosts }
];
