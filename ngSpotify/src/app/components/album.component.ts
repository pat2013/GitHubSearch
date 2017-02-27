import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { spotifyService } from '../services/spotfiyService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-artist',
  templateUrl: `./app/html/album.html`,
})

export class AlbumComponent {

    id: string;
    album: Album[];

    constructor(
        private _spotifyService:spotifyService,
        private _route:ActivatedRoute){

    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            })
    }


} // The End of Class;