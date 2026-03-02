import { Component, inject } from '@angular/core';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InsurancesService } from '../../services/insurances.service';

@Component({
  selector: 'app-health-insurances',
  imports: [
    AddInvoiceComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class Board {

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
