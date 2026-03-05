import { Component } from '@angular/core';
import { InvoiceComponent } from './invoice/invoice.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices',
  imports: [
    InvoiceComponent
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const status = this.route.snapshot.queryParamMap.get('status');
    console.log(status);
  }

}
