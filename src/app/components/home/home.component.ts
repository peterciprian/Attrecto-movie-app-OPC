import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { Details } from 'src/app/interfaces/details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public crud: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {}

  public openDetails(id: number): void {
    this.crud.fetchDetails(id).subscribe( movieDetails => {
      console.log(movieDetails);
      this.openDialog(movieDetails);
    });
  }

  public openDialog(movie: Details): void {
    console.log(movie);
    this.dialog.open(MovieDetailComponent, {
      data: {
        movie
      }
    });
  }
}
