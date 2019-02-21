import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      Editando el user #{{id}}
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {
  id = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(params => {
      console.log('Toma params user/:id/edit');
      console.log(params);
      this.id = params.id;
    });
  }

  ngOnInit() {
  }

}
