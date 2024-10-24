import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface CharacterResponse {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterAPIService {
  private httpClient = inject(HttpClient);

  createCharacter(eye: string, hasHammer: boolean, mouth: string, rightHand: string, hasTail: boolean): Promise<CharacterResponse> {
    const body = {
      eye: eye,
      hasHammer: hasHammer,
      mouth: mouth,
      rightHand: rightHand,
      hasTail: hasTail
    };

    return firstValueFrom(
      this.httpClient.post<CharacterResponse>(
        'http://localhost:5110/build-image-url',
        body,
        {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
    );
  }
}
