import { ProdutosService } from './../services/produtos.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class ProdutosPage {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtosService.getAll().subscribe(dados => {
      this.listaProdutos = dados as Produto[];
    });
  }
}
