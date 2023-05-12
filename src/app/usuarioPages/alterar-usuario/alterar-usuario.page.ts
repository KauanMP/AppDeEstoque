import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarUsuarioPage implements OnInit {
  id = 0;
  email = "";
  firstName = "";
  lastName = "";
  image: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private UserService: UsuarioService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.UserService.getOne(this.id).subscribe(retorno => {
      this.firstName = retorno.first_name as string;
      this.lastName = retorno.last_name as string;
      this.email = retorno.email ? retorno.email : '';
    })
  }

  salvar() {
    if (this.firstName && this.lastName && this.email) {
      const usuario: Usuario = {
        id: this.id,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        avatar: this.image,
      }
      this.UserService.update(usuario).subscribe(dados => {
        alert('Usuario alterado com sucesso: ' + dados.id)
        this.router.navigateByUrl('/home-usuarios');
      });
    } else {
      alert("opaaaaa, olha o erro!")
    }
  }

}
