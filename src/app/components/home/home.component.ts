import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { Details } from 'src/app/interfaces/details';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public crud: CrudService, public dialog: MatDialog, public notification: NotificationService) { }

  ngOnInit(): void {}

  public openDetails(id: number): void {
    this.crud.fetchDetails(id).subscribe( movieDetails => {
      this.openDialog(movieDetails);
    }, error => {
      this.notification.showError(error);
    });
  }

  public openDialog(movie: Details): void {
    this.dialog.open(MovieDetailComponent, {
      data: {
        movie
      }
    });
  }
}
