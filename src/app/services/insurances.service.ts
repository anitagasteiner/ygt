import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InsurancesService {

  /**
   * Boolean flag indicating if the new invoice form is opened.
   * @type {boolean}
   */
  newInvoiceFormOpened: boolean = false;
  
}
