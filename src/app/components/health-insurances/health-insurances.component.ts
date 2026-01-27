import { Component } from '@angular/core';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

@Component({
  selector: 'app-health-insurances',
  imports: [
    NewInvoiceComponent
  ],
  templateUrl: './health-insurances.component.html',
  styleUrl: './health-insurances.component.scss',
})
export class HealthInsurances {

}
