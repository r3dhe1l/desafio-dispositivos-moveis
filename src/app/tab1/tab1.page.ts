import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tipoServicos = [
    {
      nome: 'Casa e moradia',
      descricao: 'Iluminação pública, lixo e calçadas.',
      icone: 'home-outline',
    },
    {
      nome: 'Calçadas, ruas e estradas',
      descricao: 'Erosão, buracos e sinalização.',
      icone: 'earth-outline',
    },
    {
      nome: 'Água e Esgoto',
      descricao: 'Saneamento básico.',
      icone: 'water-outline',
    },
    {
      nome: 'Sinalização Urbana',
      descricao: 'Sinalização de trânsito e placas de rua.',
      icone: 'car-sport-outline',
    },
    {
      nome: 'Animais perigosos',
      descricao: 'Animais soltos e animais peçonhentos.',
      icone: 'paw-outline',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  irPagSolicitacao(tipoServ: string) {
    this.router.navigate(['/pag-solicitacao', tipoServ]);
  }
}
