import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/service/servicos.service';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-perfil-servicos',
  templateUrl: './perfil-servicos.page.html',
  styleUrls: ['./perfil-servicos.page.scss'],
})
export class PerfilServicosPage implements OnInit {

  protected servico: Servico = new Servico;
  private id: string = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400
  };
  constructor(
    protected servicoService: ServicoService,
    protected activatedRoute: ActivatedRoute,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.servicoService.get(this.id).subscribe(
        res => {
          this.servico = res
        }
      )
    }
  }
}