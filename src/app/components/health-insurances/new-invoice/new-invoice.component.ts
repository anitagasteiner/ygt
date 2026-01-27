import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataBaseService } from '../../../services/data-base.service';
import { Invoice } from '../../../models/invoice.model';

@Component({
  selector: 'app-new-invoice',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss',
})
export class NewInvoiceComponent {

  /**
   * Instance of DataBaseService to access the Firebase Database.
   * @type {DataBaseService}
   */
  dataBaseService: DataBaseService = inject(DataBaseService);

  addInvoiceForm: FormGroup;

  /**
   * Currently selected type.
   * @type {string}
   */
  selectedType: string = '';

  /**
   * Available patients to choose from.
   * @type {string[]}
   */
  patients: string[] = ['Anita', 'Elmar', 'Frida', 'Nina'];

  constructor(private fb: FormBuilder) {
    this.addInvoiceForm = this.fb.nonNullable.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      patient: ['', Validators.required]
    });
  }

  /**
   * Submits the add invoice form and persists the data to the Firebase Database.
   * Validates the form state before submission.
   * If the form is invalid, all controls are marked as touched and the submission is aborted.
   * On successful validation, the form values are mapped to an {@link Invoice} object and stored in the 'invoices' collection via the {@link DataBaseService}.
   * @returns {Promise<void>} Resolves when the invoice has been successfully stored. Rejects if an error occurs.
   */
  async onSubmit(): Promise<void> {
    if (this.addInvoiceForm.invalid) {
      this.addInvoiceForm.markAllAsTouched();
      return;
    }
    const invoice: Invoice = this.addInvoiceForm.getRawValue();
    try {
      await this.dataBaseService.addData<Invoice>('invoices', invoice);
      console.log('data saved: ', this.addInvoiceForm);
    } catch (error: any) {
      console.log('error: no data saved');
    }
  }

}