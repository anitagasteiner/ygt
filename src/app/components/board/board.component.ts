import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { AddInvoiceFormComponent } from './../../shared/components/add-invoice-form/add-invoice-form.component';
import { InvoicesService } from '../../services/invoices.service';
import { DataBaseService } from '../../services/data-base.service';
import { Invoice } from '../../models/invoice.model';


@Component({
  selector: 'app-board',
  imports: [
    CommonModule,
    AddInvoiceFormComponent,
    RouterLink
    ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class Board {

  /**
   * Instance of DataBaseService used to access the Firebase Database.
   * @type {DataBaseService}
   */
  dataBaseService: DataBaseService = inject(DataBaseService);


  /**
   * Instance of InvoicesService to manage invoices operations.
   * @type {InvoicesService}
   */
  invoicesService: InvoicesService = inject(InvoicesService);


  /**
   * Observalbe stream of all invoices.
   * @type {Observable<Invoice[]>}
   */
  unsortedInvoices$: Observable<Invoice[]>;


  /**
   * Observable emitting the number of invoices.
   * @type {Observable<number>}
   */
  invoicesCount$: Observable<number>;


  /**
   * Initializes the board component. Loads the invoices data.
   */
  constructor() {
    this.unsortedInvoices$ = this.dataBaseService.getData<Invoice>('invoices');
    this.invoicesCount$ = this.countInvoices();
  }

  countInvoices(): Observable<number> {
    return this.unsortedInvoices$.pipe(
      map(invoices => invoices.length)
    );
  }


  /**
   * Shows the add invoice form.
   */
  showAddInvoiceForm(): void {
    this.invoicesService.newInvoiceFormOpened = true;
  }


  /**
   * Hides the add invoice form.
   */
  hideAddInvoiceForm() {
    this.invoicesService.newInvoiceFormOpened = false;
  }

}
