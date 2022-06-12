import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public charactersURL : string = "https://rickandmortyapi.com/api/character/"

  constructor(private HttpClient: HttpClient) { }

  public getCharacters(){
    return this.HttpClient.get (this.charactersURL)

  }

  public getCharacter (characterID:any) {
   
    return this.HttpClient.get(`https://rickandmortyapi.com/api/character/${characterID}`)
    
    
  }




}
