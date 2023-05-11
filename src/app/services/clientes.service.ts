import { Cliente } from '../models/Cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url='http://localhost:3000/clientes'

  constructor( private http: HttpClient, private alertctrl: AlertController) { }

  create( cliente: Cliente):Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  login(){}

  logout(){}

  exibirErro(erro: any): Observable<any>{
    const titulo = 'Erro na conexão!'
    const msg = `Verifique sua conexão ou Informe esse erro ao suporte: ${erro.status}`;
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
