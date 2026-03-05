import { Component } from '@angular/core';
import { InvoiceComponent } from './invoice/invoice.component';

@Component({
  selector: 'app-invoices',
  imports: [
    InvoiceComponent
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent {

}
