import { CharacterService } from './../../services/character.service';
import { CharacterInterface } from './../../models/characters.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characterList : CharacterInterface [] = [];
  constructor(public CharacterService: CharacterService) {}

  
  ngOnInit(): void {
    this.CharacterService.getCharacters().subscribe((data:any)=>{
      console.log(data);
      
      const charactersAPI: CharacterInterface[] = data.results.map((character:any) => (
        {id: character.id,
         name:character.name,
         status:character.status,
         species: character.species,
         gender:character.gender,
         image:character.image,
      }))
      
      
      this.characterList = charactersAPI;
    })
  } 
}
