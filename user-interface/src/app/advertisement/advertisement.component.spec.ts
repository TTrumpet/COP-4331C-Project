import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementComponent } from './advertisement.component';

describe('AdvertisementComponent', () => {
  let component: AdvertisementComponent;
  let fixture: ComponentFixture<AdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
