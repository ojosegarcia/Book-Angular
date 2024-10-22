import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './book.service';
import { BooksComponent } from './books/books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations:[
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    BooksComponent
  ]
  imports: [
    AppModule,
    ServerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
