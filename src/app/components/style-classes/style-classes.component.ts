import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-classes',
  templateUrl: './style-classes.component.html',
  styleUrls: ['./style-classes.component.css']
})
export class StyleClassesComponent implements OnInit {
  // 'alert-success', 'alert-info', 'alert-warning', 'alert-danger', 'alert-primary'
  alertStyles: any = [
    {
      style: 'alert-success',
      name: 'success'
    },
    {
      style: 'alert-info',
      name: 'info'
    },
    {
      style: 'alert-warning',
      name: 'warning'
    },
    {
      style: 'alert-danger',
      name: 'danger'
    },
    {
      style: 'alert-primary',
      name: 'primary'
    }
  ];
  loading = false;
  constructor() { }

  ngOnInit() {
  }
  changeStyle(style: string) {
    console.log(style);
  }
  ejecutar() {
    this.loading = true;
    console.log(this.loading);
    setTimeout(() => this.loading = false, 3000);
  }
}
