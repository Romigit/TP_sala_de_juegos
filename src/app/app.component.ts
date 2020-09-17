import { Component, OnInit } from '@angular/core';

import {PicturesService} from './services/pictures.service';
import {Picture} from './models/picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { //es para que cargue de una las fotografías
  title = 'tp1';
  pictures: Picture[] = [];
  albumsId = [1,2,3];

  constructor(public picturesService: PicturesService){}

  ngOnInit(){
    this.picturesService.getPictures()
    .subscribe(
      pictures => {
                      console.log(pictures),
                      this.pictures = pictures; //como no reconoce el tipo de dato en this.pictures entonces genero la clase picture. Luego establece que espera pero no sabe que llega
                  },
      err      => console.log(err)
    )
  }
}
