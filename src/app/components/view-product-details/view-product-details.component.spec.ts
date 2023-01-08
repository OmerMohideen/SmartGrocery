import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailsComponent } from './view-product-details.component';

describe('ViewProductDetailsComponent', () => {
  let component: ViewProductDetailsComponent;
  let fixture: ComponentFixture<ViewProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
