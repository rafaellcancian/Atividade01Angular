import { Servico2Service } from './../services/servico2.service';
import { Album } from './../models/Album.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-albums',
  templateUrl: './componente-albums.component.html',
  styleUrls: ['./componente-albums.component.css']
})
export class ComponenteAlbumsComponent implements OnInit {

  albums: Album;
  erro: any;

  constructor(private router: Router, private albumServico: Servico2Service) {
    this.getter();
  }

  getter(): void {
    // tslint:disable-next-line: deprecation
    this.albumServico.getAlbums().subscribe(
      (data: Album) => {
        this.albums = data;
      },
      (error: any) => {
        this.erro = error;
        console.error('ERRO: ', this.erro);
      }
    );
  }

  selecionar(a: Album): void {
    this.router.navigateByUrl('/componentePhotos?albumId=' + a.id);
  }

  ngOnInit(): void {
  }

}
