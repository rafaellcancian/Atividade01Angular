import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  pessoas = [
    {nome: 'Fabrício', papel: 'Professor'},
    {nome: 'Reiner', papel: 'Professor'},
    {nome: 'Cesar', papel: 'Aluno'},
    {nome: 'Vitor', papel: 'Aluno'},
    {nome: 'Augusto', papel: 'Aluno'},
    {nome: 'Juliano', papel: 'Aluno'},
    {nome: 'Wagner', papel: 'Aluno'},
    {nome: 'Rafael', papel: 'Aluno'},
    {nome: 'Roberta', papel: 'Aluno'},
    {nome: 'Ruan', papel: 'Aluno'},
    {nome: 'Gabriel', papel: 'Aluno'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
