import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LuckyServiceService {
  private eyeOptions = ["NoEye", "HalfOpen", "Closed", "Open"];
  private mouthOptions = ["NoMouth", "Happy", "Unhappy", "Normal"];
  private handOptions = ["NoHand", "Normal", "Victory"];

  getRandomCharacterOptions() {
    const randomEye = this.eyeOptions[Math.floor(Math.random() * this.eyeOptions.length)];
    const randomMouth = this.mouthOptions[Math.floor(Math.random() * this.mouthOptions.length)];
    const randomHand = this.handOptions[Math.floor(Math.random() * this.handOptions.length)];
    const hasHammer = Math.random() < 0.5;
    const hasTail = Math.random() < 0.5;

    return {
      eye: randomEye,
      mouth: randomMouth,
      rightHand: randomHand,
      hasHammer: hasHammer,
      hasTail: hasTail
    };
  }
}
