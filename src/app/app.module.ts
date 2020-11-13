import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CrudService } from './services/crud.service';
import { NotificationService } from './services/notification.service';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MovieCardComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [CrudService, NotificationService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
