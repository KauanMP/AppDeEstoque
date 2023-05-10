import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage)
  },
  {
    path: 'create-cliente',
    loadComponent: () => import('./clientePages/create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },
  {
    path: 'alterar-cliente/:id',
    loadComponent: () => import('./clientePages/alterar-cliente/alterar-cliente.page').then( m => m.AlterarClientePage)
  },
  {
    path: 'create-produto',
    loadComponent: () => import('./produtoPages/create-produto/create-produto.page').then( m => m.CreateProdutoPage)
  },
  {
    path: 'alterar-produto',
    loadComponent: () => import('./produtoPages/alterar-produto/alterar-produto.page').then( m => m.AlterarProdutoPage)
  },


];
