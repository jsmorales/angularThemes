import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      ng-style works!
    </p>
    <input type="text" #tamanoFont>
    &nbsp;
    <button class="btn btn-primary" (click)="aumentarFont(tamanoFont.value)"><i class="fa fa-plus-square"></i> Aumentar Fuente</button>
    &nbsp;
    <button class="btn btn-primary" (click)="disminuirFont(tamanoFont.value)"><i class="fa fa-minus-square"></i> Disminuir Fuente</button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 40;
  constructor() { }

  ngOnInit() {
    console.log('ngOninit');
  }
  aumentarFont(tamFont: number) {
    this.tamano = +this.tamano + +tamFont;
    console.log(this.tamano);
  }
  disminuirFont(tamFont: number) {
    this.tamano = this.tamano - tamFont;
    console.log(this.tamano);
  }
}
