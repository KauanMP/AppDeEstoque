import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url='http://localhost:3000/produtos'

  constructor( private http: HttpClient, private alertctrl: AlertController) { }

  create( produto: Produto):Observable<Produto> {
    return this.http.post<Produto>(this.url, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }


  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  exibirErro(erro: any): Observable<any>{
    const titulo = 'Erro na conexão!'
    const msg = `Verifique sua conexão <br> ou <br> Informe esse erro ao suporte: ${erro.status}`;
    this.presentAlert(titulo, msg)
    console.log(erro);
    return EMPTY;
  }

  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertctrl.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}

