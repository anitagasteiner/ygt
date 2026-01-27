import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthInsurances } from './health-insurances.component';

describe('HealthInsurances', () => {
  let component: HealthInsurances;
  let fixture: ComponentFixture<HealthInsurances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthInsurances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInsurances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
