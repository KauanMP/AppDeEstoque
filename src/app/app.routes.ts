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
    path: 'alterar-produto/:id',
    loadComponent: () => import('./produtoPages/alterar-produto/alterar-produto.page').then( m => m.AlterarProdutoPage)
  },
  {
    path: 'home-cliente',
    loadComponent: () => import('./clientePages/home-cliente/home-cliente.page').then( m => m.HomeClientePage)
  },
  {
    path: 'home-produtos',
    loadComponent: () => import('./produtoPages/home-produtos/home-produtos.page').then( m => m.HomeProdutosPage)
  },
  {
    path: 'home-usuarios',
    loadComponent: () => import('./usuarioPages/home-usuarios/home-usuarios.page').then( m => m.HomeUsuariosPage)
  },
  {
    path: 'alterar-usuario/:id',
    loadComponent: () => import('./usuarioPages/alterar-usuario/alterar-usuario.page').then( m => m.AlterarUsuarioPage)
  },  {
    path: 'create-usuario',
    loadComponent: () => import('./usuarioPages/create-usuario/create-usuario.page').then( m => m.CreateUsuarioPage)
  },






];
