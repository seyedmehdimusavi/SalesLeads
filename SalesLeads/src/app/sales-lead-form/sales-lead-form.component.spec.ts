import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadFormComponent } from './sales-lead-form.component';

describe('SalesLeadFormComponent', () => {
  let component: SalesLeadFormComponent;
  let fixture: ComponentFixture<SalesLeadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesLeadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesLeadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
