import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  toComponent(tag){
    let offsetTop = document.getElementById(tag).offsetTop - 120;
    window.scrollTo({top:offsetTop,left:0,behavior:'smooth'});

  }
}
