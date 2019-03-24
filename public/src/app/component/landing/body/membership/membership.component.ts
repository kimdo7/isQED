import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor() { 
     console.log("SY constructing MembershipComponent");
  }

  ngOnInit() {
    console.log("SY constructing MembershipComponent");
  }

}
