import { Component, inject, signal } from '@angular/core';
import { CharacterAPIService } from '../character-api.service';
import {LuckyServiceService} from "../lucky-service.service";
import {NgIf} from "@angular/common"; // Falls du das Bild von einem Service erhältst

@Component({
  selector: 'app-randomizer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css'] // Hier den richtigen Namen verwenden
})
export class RandomizerComponent {
  characterIMG = signal<string>('');

  private characterAPIService = inject(CharacterAPIService);
  private luckyService = inject(LuckyServiceService);

  protected async loadRandomImage() {
    const response = await this.characterAPIService.createCharacter(this.luckyService.getRandomCharacterOptions().eye, this.luckyService.getRandomCharacterOptions().hasHammer, this.luckyService.getRandomCharacterOptions().mouth, this.luckyService.getRandomCharacterOptions().rightHand, this.luckyService.getRandomCharacterOptions().hasTail);
    this.characterIMG.set(response.url); // Beispiel für das Setzen des Bildes
  }

  zoomIn() {
    const img = document.getElementById('characterIMG') as HTMLImageElement; // Typisierung
    if (img) {
      const currentWidth = img.clientWidth; // Aktuelle Breite in Pixeln
      img.style.width = (currentWidth + 10) + 'px'; // Breite um 10px erhöhen
    }
  }

  zoomOut() {
    const img = document.getElementById('characterIMG') as HTMLImageElement; // Typisierung
    if (img) {
      const currentWidth = img.clientWidth; // Aktuelle Breite in Pixeln
      if (currentWidth > 20) { // Um negative Breiten zu vermeiden
        img.style.width = (currentWidth - 10) + 'px'; // Breite um 10px verringern
      }
    }
  }
}
