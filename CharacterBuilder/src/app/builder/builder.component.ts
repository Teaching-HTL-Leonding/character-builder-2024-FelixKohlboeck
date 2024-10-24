import {Component, inject, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgComponentOutlet, NgIf, NgOptimizedImage} from "@angular/common";
import {CharacterAPIService} from "../character-api.service";

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
  styleUrl: './builder.component.css'
})
export class BuilderComponent {

  eye = signal<string>("NoEye");

  hasHammer = signal<boolean>(false);

  mouth = signal<string>("NoMouth");

  rightHand = signal<string>("NoHand");

  hasTail = signal<boolean>(false);

  characterIMG = signal<string>("");

  private characterAPIService = inject(CharacterAPIService);

  async submit() {
    const response = await this.characterAPIService.createCharacter(this.eye(), this.hasHammer(), this.mouth(), this.rightHand(), this.hasTail());
    this.characterIMG.set(response.url);
    console.log(response.url)
  }
}
