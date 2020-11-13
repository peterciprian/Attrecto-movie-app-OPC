import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Details } from 'src/app/interfaces/details';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public width = 300;
  public height = 450;
  public imgSource = 'assets/img/movieDetailErrorImage.png';

  constructor(public crud: CrudService, @Inject(MAT_DIALOG_DATA) public data: {movie: Details}) {
    this.imgSource = this.data.movie.poster_path ? `https://image.tmdb.org/t/p/w${this.width}_and_h${this.height}_bestv2${this.data.movie.poster_path}` : 'assets/img/movieDetailErrorImage.png';
    console.log(this.data.movie);
   }

  ngOnInit(): void {
  }

}
