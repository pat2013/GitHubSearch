import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search.component';
import { AboutComponent } from './components/app.about.component';
import { ArtistComponent } from './components/artist.component';
import { AlbumComponent }  from './components/album.component';
//import { PageNotFoundComponent } from './pages/app.pageNotFound';

const appRoutes: Routes = [
    { path: 'home', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent }
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
