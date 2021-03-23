import { Servico2Service } from './../services/servico2.service';
import { Photo } from './../models/Photo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-photos',
  templateUrl: './componente-photos.component.html',
  styleUrls: ['./componente-photos.component.css']
})
export class ComponentePhotosComponent implements OnInit {

  photos: Photo;
  erro: any;

  albumId: number;

  constructor(private route: ActivatedRoute, private photoServico: Servico2Service) {
    // tslint:disable-next-line: deprecation
    this.route.queryParams.subscribe(
      (params) => {
        this.albumId = params.albumId;
        this.getter();
      }
    );
  }

  getter(): void {
    // tslint:disable-next-line: deprecation
    this.photoServico.getPhotos(this.albumId).subscribe(
      (data: Photo) => {
        this.photos = data;
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
