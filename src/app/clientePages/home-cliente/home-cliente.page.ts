import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HomeClientePage {
  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClientesService, private router: Router) {  }

  ionViewWillEnter(){
    this.buscarCliente();
  }

  buscarCliente() {
    this.clienteService.getAll().subscribe((dados) => {
      this.listaClientes = dados;
    });
  }

  alterarCliente(id: number) {
    this.router.navigateByUrl(`/alterar-cliente/${id}`);
  }

  excluirCliente(id: number) {

  }
}
