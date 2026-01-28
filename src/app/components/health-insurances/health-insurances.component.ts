import { Component, inject } from '@angular/core';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { InsurancesService } from '../../services/insurances.service';

@Component({
  selector: 'app-health-insurances',
  imports: [
    NewInvoiceComponent
  ],
  templateUrl: './health-insurances.component.html',
  styleUrl: './health-insurances.component.scss',
})
export class HealthInsurances {

  /**
   * Instance of InsurancesService to manage insurances operations.
   * @type {InsurancesService}
   */
  insurancesService: InsurancesService = inject(InsurancesService);

  /**
   * Shows the new invoice form.
   */
  showNewInvoiceForm(): void {
    this.insurancesService.newInvoiceFormOpened = true;
  }

}
