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
  public posterImageUrl = 'assets/img/moviePosterErrorImage.png';

  constructor(public crud: CrudService) {
   }

  ngOnInit(): void {
    this.posterImageUrl = this.movie.poster_path ? `https://image.tmdb.org/t/p/w${this.width}_and_h${this.height}_bestv2${this.movie.poster_path}` : 'assets/img/moviePosterErrorImage.png';
   }

}
