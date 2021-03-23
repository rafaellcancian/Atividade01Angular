import { Servico1Service } from './../services/servico1.service';
import { Photo } from './../models/Photo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-servico',
  templateUrl: './componente-servico.component.html',
  styleUrls: ['./componente-servico.component.css']
})
export class ComponenteServicoComponent implements OnInit {

  photos: Photo;
  erro: any;

  constructor(private photoServico: Servico1Service) {
    this.getter();
   }

  getter(): void {
    // tslint:disable-next-line: deprecation
    this.photoServico.getPhotos().subscribe(
      (data: Photo) => {
        this.photos = data;

        console.log('O que retornou em data: ', data);
        console.log('Variável photos: ', this.photos);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERRO: ', this.erro);
      }
    );
  }

  ngOnInit(): void {
  }

}
