import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute,private router: Router,
    private usuarioService: UsuarioService) { }


  ngOnInit() {

    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.obtenerUsuario(this.id)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error));

  }

  lista(){
    this.router.navigate(['usuarios']);
  }

}
