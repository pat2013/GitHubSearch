import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { spotifyService } from '../services/spotfiyService';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { PagerService } from '../services/pagerService';

@Component({
  selector: 'my-artist',
  templateUrl: `../html/album.html`,
})

export class AlbumComponent implements OnInit {

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