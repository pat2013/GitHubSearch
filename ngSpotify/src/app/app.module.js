"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_navbar_component_1 = require('./components/app.navbar.component');
var app_about_component_1 = require('./components/app.about.component');
var search_component_1 = require('./components/search.component');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var spotfiyService_1 = require('./services/spotfiyService');
var artist_component_1 = require('./components/artist.component');
var album_component_1 = require('./components/album.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routes_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [app_component_1.AppComponent,
                app_navbar_component_1.NavComponent,
                app_about_component_1.AboutComponent,
                search_component_1.SearchComponent,
                artist_component_1.ArtistComponent,
                album_component_1.AlbumComponent
            ],
            providers: [spotfiyService_1.spotifyService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map