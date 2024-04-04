import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
    textColor = "FFFFFF";

    constructor(private profileService : ProfileService){}

    ngOnInit(){
      this.getColor();
    }
    getColor()
    {
      this.textColor = this.profileService.textcolor;
    }
    onTextChange(newCol : string)
    {
      this.profileService.textcolor = newCol;
    }
}
