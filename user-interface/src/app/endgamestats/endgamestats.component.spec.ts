import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndgamestatsComponent } from './endgamestats.component';

describe('EndgamestatsComponent', () => {
  let component: EndgamestatsComponent;
  let fixture: ComponentFixture<EndgamestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndgamestatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndgamestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
