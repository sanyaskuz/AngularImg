import { Component, OnInit } from '@angular/core';
import {MatYearView} from "@angular/material/datepicker";
import {MatDialog} from "@angular/material/dialog";
import {appImgService} from "../getImg";

@Component({
  selector: 'app-one-img',
  templateUrl: './one-img.component.html',
  styleUrls: ['./one-img.component.css']
})
export class OneImgComponent implements OnInit {
  imgOne:appImgService;
  constructor(private My: MatDialog) {
    this.imgOne = new appImgService('../assets/Img/K.jpeg', "K")
  }
  closePopUp(){
    this.My.closeAll();
  }
  ngOnInit(): void {

  }

}
