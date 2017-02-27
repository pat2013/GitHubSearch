import { Component } from '@angular/core';
import { spotifyService } from '../services/spotfiyService';
import { Artist } from '../../../Artist';
@Component({
  selector: 'my-search',
  templateUrl: `./app/html/home.html`
})
export class SearchComponent  { 
  searchStr : string;
  searchRes : Artist[];

  constructor(private spotfiyService:spotifyService){

  }
  searchMusic(){
      this.spotfiyService.searchMusic(this.searchStr).subscribe(res =>{
          console.log(res.artists.items);
          this.searchRes = res.artists.items;
       })
  }
}