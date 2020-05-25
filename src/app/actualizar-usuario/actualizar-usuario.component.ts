import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute, private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.obtenerUsuario(this.id)
      .subscribe(data => {
        console.log(data);
        this.usuario = data;
      }, error => console.log(error));

  }


  actualizarUsuario() {
    this.usuarioService.actualizarUsuario(this.id, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
  
    this.usuario = new Usuario();
    this.lista();
  }

  onSubmit() {
    this.actualizarUsuario();
  }

  lista() {
    this.router.navigate(['/usuarios']);
  }

}
