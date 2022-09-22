import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OneImgComponent} from "./one-img/one-img.component"
import {TwoImgComponent} from "./two-img/two-img.component";
import {ThreeImgComponent} from "./three-img/three-img.component";
import {appImgService} from "./getImg";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularImg';
  imgOne: appImgService;
  imgTwo: appImgService;
  imgThree: appImgService;

  constructor(private My: MatDialog) {
    this.imgOne = new appImgService('../assets/Img/K.jpeg', "K")
    this.imgTwo = new appImgService('../../assets/Img/black.jpeg', "Black");
    this.imgThree = new appImgService('../../assets/Img/apple.jpeg', "apple");
  }
  openPopUpOne(){
    this.My.open(OneImgComponent);
  }
  openPopUpTwo(){
    this.My.open(TwoImgComponent);
  }
  openPopUpThree(){
    this.My.open(ThreeImgComponent);
  }

}
