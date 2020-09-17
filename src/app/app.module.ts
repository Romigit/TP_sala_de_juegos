import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './form/about/about.component';
import { HomeComponent } from './form/home/home.component';
import { GameComponent } from './form/game/game.component';
import { NotFoundComponent } from './form/not-found/not-found.component';
import { MenuComponent } from './form/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    GameComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
