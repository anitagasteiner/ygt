import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage.component';
import { Board } from './components/board/board.component';
import { HealthInsurances } from './components/health-insurances/health-insurances.component';
import { RunningCosts } from './components/running-costs/running-costs.component';

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'board', component: Board },
    { path: 'health-insurances', component: HealthInsurances },
    { path: 'running-costs', component: RunningCosts }
];
