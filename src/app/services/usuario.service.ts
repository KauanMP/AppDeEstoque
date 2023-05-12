import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { Usuario } from '../models/Usuario.model';
import { AlertController } from '@ionic/angular';
import { Response } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://reqres.in/api/users?page=2'

  constructor( private http: HttpClient, private alertctrl: AlertController) { }

  create(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Response>(this.url).pipe(
      map(retorno => retorno.data),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne(id: number): Observable<Usuario> {
    return this.http.get<Response>(`${this.url}/${id}`).pipe(
      map(retorno => retorno.data),
      catchError(erro => this.exibirErro(erro))
    );
  }

  update(usuario: Usuario) {
    return this.http.put(`${this.url}/${usuario.id}`, usuario).pipe(
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
