import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private usuarioService: UsuarioService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  nuevoUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  guardarUsuario() {
    this.usuarioService.crearUsuario(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.usuario = new Usuario();

    this.lista();

  }

  onSubmit() {
    this.submitted = true;
    this.guardarUsuario();

    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  lista() {
    this.router.navigate(['usuarios']);
  }


}
