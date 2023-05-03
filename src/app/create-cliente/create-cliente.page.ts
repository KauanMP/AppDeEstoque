import { Cliente } from './../models/Cliente.model';
import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.page.html',
  styleUrls: ['./create-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateClientePage {

  name = "";
  email = "";
  password = "";
  confirmPassword = "";


  constructor(private route: Router, private clientesService: ClientesService) { }

  salvar() {
    if (this.password === this.confirmPassword){
      const cliente: Cliente = {
        nome: this.name,
        email: this.email,
        senha: this.password
      }
      this.clientesService.create(cliente).subscribe(dados => {
        alert('Cliente inserido com sucesso: ' + dados.id)
        // navegação vem aqui
        this.route.navigateByUrl('/home');
        // this.route.navigate([/home]);
      });

      // Nunca colocar a navegação fora... vai voltar sem saber a resposta
    } else {
      alert("Senhas não conferem.")
    }
  }

}
