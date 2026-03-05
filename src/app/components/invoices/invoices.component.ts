import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataBaseService } from '../../services/data-base.service';
import { Invoice } from '../../models/invoice.model';
import { InvoiceComponent } from './invoice/invoice.component';


@Component({
  selector: 'app-invoices',
  imports: [
    InvoiceComponent
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent implements OnInit {

  /**
   * Instance of DataBaseService used to access the Firebase Database.
   * @type {DataBaseService}
   */
  dataBaseService: DataBaseService = inject(DataBaseService);


  /**
   * Observalbe stream of all invoices.
   * @type {Observable<Invoice[]>}
   */
  invoices$: Observable<Invoice[]>;


  invoicesTest = toSignal(this.dataBaseService.getData<Invoice>('invoices'), { initialValue: [] });


  /**
   * Creates an instance of the invoices component.
   * @param route Provides access to information about the current route, including query parameters used to determine which invoices to display.
   */
  constructor(private route: ActivatedRoute) {
    this.invoices$ = this.dataBaseService.getData<Invoice>('invoices');
  }


  /**
   * Angular lifecycle hook that is called after the component has been initialized.
   * Subscribes to the query parameters of the current route and XXXXXXXXXXXXXXXXX
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.showInvoices(params['status']);
      // console.log(params['status']);
    });
  }

  /**
   * TODO
   * @param status 
   */
  showInvoices(status: string) {
    console.log(status);
  }


}
