import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.page.html',
  styleUrls: ['./alterar-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutoPage implements OnInit {

  id = 0;
  title = "";
  price = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.produtosService.getOne(this.id).subscribe(retorno => {
      this.title = retorno.titulo as string;
      this.price = retorno.preco ? retorno.preco : '';
    })
  }

  salvar() {
    if (this.title && this.price){
      const produto: Produto = {
        id: this.id,
        titulo: this.title,
        preco: this.price,
      }
      this.produtosService.create(produto).subscribe(dados => {
        alert('Produto alterado com sucesso: ' + dados.id)
        // navegação vem aqui
        this.router.navigateByUrl('/home-produtos');
        // this.route.navigate([/home]);
      });

      // Nunca colocar a navegação fora... vai voltar sem saber a resposta
    } else {
      alert("alguma coisa ai deu errado.")
    }
  }

}
