import { Component } from '@angular/core';
import { spotifyService } from '../services/spotfiyService';
import { Artist } from '../../../Artist';

import * as _ from 'lodash';
import { PagerService } from '../services/pagerService';

@Component({
  selector: 'my-search',
  templateUrl: `../html/home.html`
})
export class SearchComponent  { 
  searchStr : string;
  searchRes : Artist[];
   
  // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
  constructor(private spotfiyService:spotifyService, private pagerService: PagerService){

  }
  searchMusic(){
      this.spotfiyService.searchMusic(this.searchStr).subscribe(res =>{
          console.log(res.artists.items);
          this.searchRes = res.artists.items;
           // initialize to page 1
          this.setPage(1);
       })
  }

   setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.searchRes.length, page);
 
        // get current page of items
        this.pagedItems = this.searchRes.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}