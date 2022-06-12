import { CharacterService } from './../../services/character.service';
import { CharacterInterface } from './../../models/characters.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.scss']
})
export class CharacterdetailComponent implements OnInit {
 public character!: CharacterInterface;
  constructor(private CharacterService: CharacterService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params)=> {
      const characterID = params.get('characterID')

       this.CharacterService.getCharacter(characterID).subscribe((data: any) => {
       this.character = data;
          

    })
  })
 }
}
