import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/movies';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Result;
  public width = 150;
  public height = 225;

  constructor(public crud: CrudService) { }

  ngOnInit(): void { }

}
