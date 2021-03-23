import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../models/Pessoa.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  constructor() { }

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

  selecionado = null;
  editando = null;
  nome = null;
  papel = null;

  cadastro = new FormGroup(
    {
      nome: new FormControl(''),
      papel: new FormControl('')
    }
  );

  salvar(): void {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.papel = this.papel;
    } else {
      const p = new Pessoa(this.cadastro.value.nome, this.cadastro.value.papel);
      this.pessoas.push(p);
    }

    this.cancelar();
  }

  excluir(pessoa: any): void {
    if (this.editando === pessoa) {
      alert('Não pode excluir uma pessoa em edição.');
    } else {
      if (confirm('Deseja prosseguir com a exclusão de "' + pessoa.nome + '" ?')) {
        const i = this.pessoas.indexOf(pessoa);
        this.pessoas.splice(i, 1);
      }
    }
  }

  cancelar(): void {
    this.nome = null;
    this.papel = null;
    this.editando = null;
  }

  editar(pessoa: any): void {
    this.editando = pessoa;
    this.nome = pessoa.nome;
    this.papel = pessoa.papel;
  }

  selecionar(pessoa: any): void {
    this.selecionado = pessoa;
  }

  ngOnInit(): void {
  }

}
