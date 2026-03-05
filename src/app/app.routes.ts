import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { BoardComponent } from './components/board/board.component';
import { NotesComponent } from './components/notes/notes.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'add-invoice', component: AddInvoiceComponent },
    { path: 'board', component: BoardComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'invoices', component: InvoicesComponent }
];
