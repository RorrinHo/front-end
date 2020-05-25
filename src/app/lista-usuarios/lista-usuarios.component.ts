import { Component, OnInit } from '@angular/core';

import { UsuarioService } from "../usuario.service";
import { Usuario } from "../usuario";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  
  constructor(private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.usuarios = this.usuarioService.obtenerListaUsuario();
  }

  borrarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  detalleUsuario(id: number) {
    this.router.navigate(['detalle', id]);
  }

  actualizarUsuario(id: number){
    this.router.navigate(['actualizar', id]);
  }

}
