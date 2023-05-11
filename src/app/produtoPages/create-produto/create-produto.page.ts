import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.page.html',
  styleUrls: ['./create-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateProdutoPage {

  title = "";
  price = "";

  constructor(private route: Router, private produtosService: ProdutosService) { }

  salvar() {
    if (this.title && this.price){
      const produto: Produto = {
        titulo: this.title,
        preco: this.price
      }
      this.produtosService.create(produto).subscribe(dados => {
        alert('Produto inserido com sucesso: ' + dados.id)
        // navegação vem aqui
        this.route.navigateByUrl('/home-produtos');
        // this.route.navigate([/home]);
      });
      // Nunca colocar a navegação fora... vai voltar sem saber a resposta
    } else {
      alert("Preencha todos os campos")
    }
  }

}
