import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home-usuarios',
  templateUrl: './home-usuarios.page.html',
  styleUrls: ['./home-usuarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HomeUsuariosPage {

  listaUsuarios: Usuario[] = [];

  constructor(private userService: UsuarioService, private router: Router) { }

  ionViewWillEnter() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.userService.getAll().subscribe(dados => {
      this.listaUsuarios = dados;
      console.log(this.listaUsuarios)
    });
  }

  alterarUsuario(id: number) {
    this.router.navigateByUrl(`/alterar-usuario/${id}`);
  }

  excluirUsuario(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.listaUsuarios = this.listaUsuarios.filter(p => p.id !== id);
    });
  }

}
