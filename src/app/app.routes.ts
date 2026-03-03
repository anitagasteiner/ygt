import { Routes } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage.component';
import { AddInvoice } from './components/add-invoice/add-invoice.component';
import { Board } from './components/board/board.component';
import { Notes } from './components/notes/notes.component';
import { Invoices } from './components/invoices/invoices.component';

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'add-invoice', component: AddInvoice },
    { path: 'board', component: Board },
    { path: 'notes', component: Notes },
    { path: 'invoices', component: Invoices }
];
