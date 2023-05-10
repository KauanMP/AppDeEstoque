import { ProdutosService } from './../services/produtos.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/Produto.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})

export class ProdutosPage {

  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService, private router: Router) {  }

  ionViewWillEnter(){
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtosService.getAll().subscribe(dados => {
      this.listaProdutos = dados as Produto[];
    });
  }

  alterarProduto(id: number) {
    this.router.navigateByUrl(`/alterar-produto/${id}`);
  }

  excluirProduto(id: number) {

  }
}
