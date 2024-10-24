import { Component, inject, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgComponentOutlet, NgIf, NgOptimizedImage } from "@angular/common";
import { CharacterAPIService } from "../character-api.service";
import { LuckyServiceService } from "../lucky-service.service"; // Importiere den neuen Service

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    FormsModule,
    NgComponentOutlet,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'] // Hier den Namen korrigieren von styleUrl zu styleUrls
})
export class BuilderComponent {

  eye = signal<string>("NoEye");
  hasHammer = signal<boolean>(false);
  mouth = signal<string>("NoMouth");
  rightHand = signal<string>("NoHand");
  hasTail = signal<boolean>(false);
  characterIMG = signal<string>("");

  private characterAPIService = inject(CharacterAPIService);
  private luckyService = inject(LuckyServiceService); // Injektion des LuckyService

  async submit() {
    const response = await this.characterAPIService.createCharacter(
      this.eye(),
      this.hasHammer(),
      this.mouth(),
      this.rightHand(),
      this.hasTail()
    );
    this.characterIMG.set(response.url);
    console.log(response.url);
  }

  async feelingLucky() {
    const options = this.luckyService.getRandomCharacterOptions(); // Verwende den neuen Service
    this.eye.set(options.eye);
    this.mouth.set(options.mouth);
    this.rightHand.set(options.rightHand);
    this.hasHammer.set(options.hasHammer);
    this.hasTail.set(options.hasTail);

    const response = await this.characterAPIService.createCharacter(
      this.eye(),
      this.hasHammer(),
      this.mouth(),
      this.rightHand(),
      this.hasTail()
    );
    this.characterIMG.set(response.url);
  }
}
