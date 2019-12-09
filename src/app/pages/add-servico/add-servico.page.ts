  
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/model/servico';
import { ServicoService } from 'src/app/service/servicos.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.page.html',
  styleUrls: ['./add-servico.page.scss'],
})

export class AddServicoPage implements OnInit {

  protected servico: Servico = new Servico;
  protected id: any = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 0,
    speed: 0
  };

  constructor(
    protected servicoService: ServicoService,
    protected alertController: AlertController,
    protected activedRoute: ActivatedRoute,
    protected router: Router,
    protected platform: Platform
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.servicoService.get(this.id).subscribe(
        res => {
          this.servico = res
        },
        //erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    if (!this.id) {
      this.servicoService.save(this.servico).then(
        res => {
          form.reset();
          this.servico = new Servico;
          //console.log("Cadastrado!");
          //this.preview = null
          this.presentAlert("Aviso", "Cadastrado!")
          this.router.navigate(['', res.id]);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel cadastrar!")
        }
      )
    }
  }
  //Alerts-------------------
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }
}