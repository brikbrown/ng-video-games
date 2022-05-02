import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { APIResponse, Filters, Game } from 'src/app/services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sort: string;
  public games: Array<Game>;
  public filters: Filters[];

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.filters = [
      {name: 'Name', value: 'name'},
      {name: 'Released', value: '-released'},
      {name: 'Added', value: '-added'},
      {name: 'Created', value: '-created'},
      {name: 'Updated', value: '-updated'},
      {name: 'Rating', value: '-rating'},
      {name: 'Metacritic', value: 'metacritic'}
    ]
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.api.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    });
  }

  openDetails(gameId: number): void {
    this.router.navigate(['details', gameId]);
  }

}
