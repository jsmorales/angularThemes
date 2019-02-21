import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  alertCase = 'success';
  constructor() { }

  ngOnInit() {
  }

  getDangerAlert() {
    this.alertCase = 'danger';
  }
}
