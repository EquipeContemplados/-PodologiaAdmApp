  
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/service/agendamento.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-agendamento',
  templateUrl: './add-agendamento.page.html',
  styleUrls: ['./add-agendamento.page.scss'],
})

export class AddAgendamentoPage implements OnInit {

  protected agendamento: Agendamento = new Agendamento;
  protected id: any = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 0,
    speed: 0
  };

  constructor(
    protected agendamentoService: AgendamentoService,
    protected alertController: AlertController,
    protected activedRoute: ActivatedRoute,
    protected router: Router,
    protected platform: Platform
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.agendamentoService.get(this.id).subscribe(
        res => {
          this.agendamento = res
        },
        //erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    if (!this.id) {
      this.agendamentoService.save(this.agendamento).then(
        res => {
          form.reset();
          this.agendamento = new Agendamento;
          //console.log("Cadastrado!");
          //this.preview = null
          this.presentAlert("Aviso", "Agendado!")
          this.router.navigate(['', res.id]);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel agendar!")
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