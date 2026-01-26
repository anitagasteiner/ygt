import { Component, inject } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataBaseService } from '../../../services/data-base.service';
import { Invoice } from '../../../models/invoice.model';

@Component({
  selector: 'app-new-insurance',
  imports: [
    //CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-insurance.component.html',
  styleUrl: './new-insurance.component.scss',
})
export class NewInsuranceComponent {

  /**
   * Instance of DataBaseService to access the Firebase Database.
   * @type {DataBaseService}
   */
  dataBaseService: DataBaseService = inject(DataBaseService);

  addInvoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addInvoiceForm = this.fb.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      patient: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.addInvoiceForm.valid) {
      console.log('Form Data: ', this.addInvoiceForm.value);
    }else {
      console.log('Form is invalid.');
    }
  }

















  // /**
  //  * Reactive form control for the date.
  //  * Holds an ISO date string (yyyy-mm-dd) or null.
  //  * @type {FormControl<string | null>}
  //  */
  // dateControl: FormControl<string | null> = new FormControl<string | null>(null, {
  //   nonNullable: false
  // });

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

  // /**
  //  * Reactive form control for the selected patient.
  //  * Holds the currently selected patient name or null if no selection was made.
  //  * @type {FormControl<string | null>}
  //  */
  // patientControl: FormControl<string | null> = new FormControl<string | null>(null, {
  //   nonNullable: false
  // });

  // /**
  //  * The new invoice that is being created.
  //  * @type {Invoice}
  //  */
  // newInvoice: Invoice = {
  //   id: '',
  //   type: '',
  //   date: '',
  //   patient: ''
  // };

  // addInvoiceForm = new FormGroup({
  //   date: new FormControl<string | null>(null, Validators.required),
  //   type: new FormControl<'invoice' | 'receipt' | null>(null, Validators.required),
  //   patient: new FormControl<string | null>(null, Validators.required)
  // });

  // /**
  //  * Collects and stores form data into the new invoice model.
  //  */
  // getNewInvoiceData(): void {
  //   this.newInvoice.type = this.selectedType;
  //   this.newInvoice.date = this.dateControl.value ?? '';
  //   this.newInvoice.patient = this.patientControl.value ?? '';
  // }

  // /**
  //  * Handles form submission.
  //  * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
  //  * @param form 
  //  * @returns 
  //  */
  // async onSubmit(): Promise<void> {
  //   if (this.addInvoiceForm.invalid) {
  //     return;
  //   }
  //   //this.getNewInvoiceData();
  //   try {
  //     await this.dataBaseService.addData<Invoice>('invoices', this.newInvoice);
  //     console.log('data saved: ', this.newInvoice);
  //   } catch (error: any) {
  //     console.log('error');
  //   }

  // }



}
