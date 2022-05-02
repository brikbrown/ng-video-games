import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ApiService } from 'src/app/services/api.service';
import { Game } from 'src/app/services/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public details: Game;

  constructor(private ar: ActivatedRoute,
              private lo: Location,
              private api: ApiService) { 
    this.getGameId();    
  }

  ngOnInit(): void {
  }

  getGameId(): void {
    const id = Number(this.ar.snapshot.paramMap.get('gameId'));
    this.api.getGameById(id).subscribe(x => {
      this.details = x;
      console.log(x)
    })
  }

}
