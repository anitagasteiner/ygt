import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceFormComponent } from './add-invoice-form.component';

describe('AddInvoiceFormComponent', () => {
  let component: AddInvoiceFormComponent;
  let fixture: ComponentFixture<AddInvoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvoiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvoiceFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
