import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningCosts } from './running-costs.component';

describe('RunningCosts', () => {
  let component: RunningCosts;
  let fixture: ComponentFixture<RunningCosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningCosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningCosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
