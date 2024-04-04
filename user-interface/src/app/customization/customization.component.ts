import { Component} from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.css'
})
export class CustomizationComponent {
  carCol  : string = "";
  carType : string = "";
  carTrail : string = "";
  constructor(private profileService : ProfileService){}
  ngOnInit(){
    this.getSets();
  }
  getSets(){
    this.carCol = this.profileService.carcolor;
    this.carType = this.profileService.cartype;
    this.carTrail = this.profileService.cartrail;
  }
  
  onCarColChange(newColor: string) {
    this.profileService.carcolor = newColor;
    this.profileService.updateCol(newColor);
  }
  onCarTypeChange(newType: string) {
    this.profileService.cartype = newType;
  }
  onCarTrailChange(newTrail: string) {
    this.profileService.cartrail = newTrail;
  }
  
}