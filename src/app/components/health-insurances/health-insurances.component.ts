import { Component } from '@angular/core';
import { NewInsuranceComponent } from './new-insurance/new-insurance.component';

@Component({
  selector: 'app-health-insurances',
  imports: [
    NewInsuranceComponent
  ],
  templateUrl: './health-insurances.component.html',
  styleUrl: './health-insurances.component.scss',
})
export class HealthInsurances {

}
