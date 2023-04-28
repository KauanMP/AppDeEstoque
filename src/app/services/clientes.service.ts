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

  create( cliente: Cliente){
    return this.http.post(this.url, cliente);
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  getOne(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  update(cliente: Cliente){
    return this.http.put(`${this.url}/${cliente.id}`, cliente);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  login(){}

  logout(){}

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
