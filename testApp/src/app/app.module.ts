import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavComponent }  from './components/app.navbar.component';
import { AboutComponent }  from './components/app.about.component';
import { SearchComponent }  from './components/search.component';
import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
import { spotifyService } from './services/spotfiyService';
import { ArtistComponent }  from './components/artist.component';
import { AlbumComponent }  from './components/album.component';

import { PagerService } from './services/pagerService';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  FormsModule,
                  HttpModule 
                ],
  declarations: [ AppComponent,
                  NavComponent,
                  AboutComponent,
                  SearchComponent,
                  ArtistComponent,
                  AlbumComponent
                ],
                
  providers: [spotifyService,
              PagerService 
             ],            
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
