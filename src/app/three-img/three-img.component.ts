import { Component, OnInit } from '@angular/core';
import {appImgService} from "../getImg";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-three-img',
  templateUrl: './three-img.component.html',
  styleUrls: ['./three-img.component.css']
})
export class ThreeImgComponent implements OnInit {
  imgThree:appImgService;
  constructor(private My: MatDialog) {
    this.imgThree = new appImgService('../../assets/Img/apple.jpeg', "apple");
  }
  closePopUp(){
    this.My.closeAll();
  }
  ngOnInit(): void {
  }

}
