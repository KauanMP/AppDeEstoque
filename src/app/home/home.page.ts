import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../models/Cliente.model';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {

  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) {
    this.buscarCliente();
  }

  buscarCliente() {
    this.clienteService.getAll().subscribe(dados => {
      this.listaClientes = dados;
    });
  }
}
