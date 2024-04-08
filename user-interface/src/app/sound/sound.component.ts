import { Component } from '@angular/core';

@Component({
  selector: 'app-sound',
  standalone: true,
  imports: [],
  templateUrl: './sound.component.html',
  styleUrl: './sound.component.css'
})
export class SoundComponent {
  sound: string = "Sound On";

  constructor() {

  }

  changeText() {
    if (this.sound == "Sound On") {
      this.sound = "Sound Off";
      // mute audio
    }
    else {
      this.sound = "Sound On";
      // unmute audio
    }
  }
}
