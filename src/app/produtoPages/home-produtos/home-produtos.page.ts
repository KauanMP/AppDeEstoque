import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home-produtos',
  templateUrl: './home-produtos.page.html',
  styleUrls: ['./home-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HomeProdutosPage {
  listaProdutos: Produto[] = [];

  constructor(private produtosService: ProdutosService, private router: Router) {  }

  ionViewWillEnter(){
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.produtosService.getAll().subscribe(dados => {
      this.listaProdutos = dados;
    });
  }

  alterarProduto(id: number) {
    this.router.navigateByUrl(`/alterar-produto/${id}`);
  }

  excluirProduto(id: number) {

  }
}
