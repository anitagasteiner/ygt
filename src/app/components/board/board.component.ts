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
export class BoardComponent {

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
  invoices$: Observable<Invoice[]>;


  /**
   * Observable emitting the number of invoices.
   * @type {Observable<number>}
   */
  invoicesCount$: Observable<number>;


  /**
   * Observable emitting the number of invoices with status 'received'.
   * @type {Observable<number>}
   */
  invoicesReceivedCount$: Observable<number>;


  /**
   * Observable emitting the number of invoices with status 'submitted to ÖGK'.
   */
  invoicesSubmPublCount$: Observable<number>;


  /**
   * Observable emitting the number of invoices with status 'refunded by ÖGK'.
   */
  invoicesRefPublCount$: Observable<number>;


  /**
   * Observable emitting the number of invoices with status 'submitted to muki'.
   */
  invoicesSubmSupplCount$: Observable<number>;


  /**
   * Observable emitting the number of invoices with status 'request(s) by muki'.
   */
  invoicesRequSupplCount$: Observable<number>;

  
  /**
   * Observable emitting the number of invoices with status 'refunded by muki'.
   */
  invoicesRefSupplCount$: Observable<number>;


  /**
   * Creates an instance of the board component.
   * Initializes the stream of all invoices.
   * Initializes streams to count all invoices and to count the invoices by their different statuses.
   */
  constructor() {
    this.invoices$ = this.dataBaseService.getData<Invoice>('invoices');
    this.invoicesCount$ = this.countInvoices();
    this.invoicesReceivedCount$ = this.countInvoicesByStatus('received');
    this.invoicesSubmPublCount$ = this.countInvoicesByStatus('submitted to ÖGK');
    this.invoicesRefPublCount$ = this.countInvoicesByStatus('refunded by ÖGK');
    this.invoicesSubmSupplCount$ = this.countInvoicesByStatus('submitted to muki');
    this.invoicesRequSupplCount$ = this.countInvoicesByStatus('request(s) by muki');
    this.invoicesRefSupplCount$ = this.countInvoicesByStatus('refunded by muki');
  }


  /**
   * Counts the total number of invoices.
   * @returns {Observable<number>} Observable with the total invoice count.
   */
  countInvoices(): Observable<number> {
    return this.invoices$.pipe(
      map(invoices => invoices.length)
    );
  }

  /**
   * Counts the number of invoices that match the passed status.
   * @param {string} status - Status to filter the invoices by.
   * @returns {Observable<number>} Observable with the count.
   */
  countInvoicesByStatus(status: string): Observable<number> {
    return this.invoices$.pipe(
      map(invoices => invoices.filter(invoice => invoice.status === status).length)
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
