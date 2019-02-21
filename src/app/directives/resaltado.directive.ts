import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private er: ElementRef) { // ElementRef hace referencia al ojbeto que tiene de forma nativa en el cual se ha puesto la directiva
    console.log('Llamando directiva personalizada.');
    // con esto se pueden cambiar los diferentes tipos de estilo
    // en este caso el color de fondo
    // this.er.nativeElement.style.backgroundColor = 'red';
  }
  @Input('appResaltado') theColor: any; // se declara que se va a recibir un parametro tipo string de la directiva appResaltado
  // HostListener es un decorador que me permite estar pendiente de los eventos del elemento
  @HostListener('mouseenter') mouseEntra() {
    this.resaltar(this.theColor.enterColor);
  }
  @HostListener('mouseleave') mouseSale() {
    this.resaltar(this.theColor.leaveColor);
  }
  @HostListener('click') clickParrafo() {
    this.resaltar(this.theColor.clickColor);
  }
  private resaltar(color: string) {
    this.er.nativeElement.style.backgroundColor = color;
  }
}
