import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.page.html',
  styleUrls: ['./create-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateUsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
