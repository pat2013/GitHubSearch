import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { spotifyService } from '../services/spotfiyService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-artist',
  templateUrl: `./app/html/artist.html`,
})
export class ArtistComponent  { 
  id: string;
    artist: Artist[];
    albums: Album[];

    constructor(
        private _spotifyService:spotifyService,
        private _route:ActivatedRoute){

    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })

                this._spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })
            })
    }


}
