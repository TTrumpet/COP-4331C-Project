import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistatsComponent } from './multistats.component';

describe('MultistatsComponent', () => {
  let component: MultistatsComponent;
  let fixture: ComponentFixture<MultistatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultistatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultistatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
