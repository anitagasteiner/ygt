import { Component } from '@angular/core';
import { AddInvoiceFormComponent } from '../../shared/components/add-invoice-form/add-invoice-form.component';

@Component({
  selector: 'app-add-invoice',
  imports: [
    AddInvoiceFormComponent
  ],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoice {

}
