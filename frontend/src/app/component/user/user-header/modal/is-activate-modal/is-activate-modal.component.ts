import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-is-activate-modal',
  templateUrl: './is-activate-modal.component.html',
  styleUrls: ['./is-activate-modal.component.scss']
})
export class IsActivateModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
