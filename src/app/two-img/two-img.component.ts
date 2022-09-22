import { Component, OnInit } from '@angular/core';
import {appImgService} from "../getImg";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-two-img',
  templateUrl: './two-img.component.html',
  styleUrls: ['./two-img.component.css']
})
export class TwoImgComponent implements OnInit {
  imgTwo:appImgService;

  constructor(private My: MatDialog) {
    this.imgTwo = new appImgService('../../assets/Img/black.jpeg', "Black");
  }
  closePopUp(){
    this.My.closeAll();
  }
  ngOnInit(): void {
  }

}
