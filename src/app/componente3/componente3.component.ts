import { Pessoa } from './../models/Pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  pessoas = [
    new Pessoa('Fabrício', 'Professor'),
    new Pessoa('Reiner', 'Professor'),
    new Pessoa('Cesar', 'Aluno'),
    new Pessoa('Vitor', 'Aluno'),
    new Pessoa('Augusto', 'Aluno'),
    new Pessoa('Juliano', 'Aluno'),
    new Pessoa('Wagner', 'Aluno'),
    new Pessoa('Rafael', 'Aluno'),
    new Pessoa('Roberta', 'Aluno'),
    new Pessoa('Ruan', 'Aluno'),
    new Pessoa('Gabriel', 'Aluno')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
