import { Component, inject } from '@angular/core';
import { AddInvoiceFormComponent } from './../../shared/components/add-invoice-form/add-invoice-form.component';
import { InsurancesService } from '../../services/insurances.service';

@Component({
  selector: 'app-health-insurances',
  imports: [
    AddInvoiceFormComponent
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
