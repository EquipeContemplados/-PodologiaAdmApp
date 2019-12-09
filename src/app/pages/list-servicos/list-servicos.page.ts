import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/service/servicos.service';

@Component({
  selector: 'app-list-servicos',
  templateUrl: './list-servicos.page.html',
  styleUrls: ['./list-servicos.page.scss'],
})

export class ListServicosPage implements OnInit {

  protected servico: any;

  constructor(
    protected servicoService: ServicoService,
    protected router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.servicoService.getAll().subscribe(
      res => {
        this.servico = res;
      }
    )
  }

  editar(servico) {
    this.router.navigate(['/tabs/addServico/', servico.key])
  }

  async doRefresh(event) {
    //console.log('Begin async operation');
    this.servicoService.getAll().subscribe(
      res => {
        this.servico = res;
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }

  async apagar(servico) {
    const alert = await this.alertController.create({
      header: 'Apagar dados!',
      message: 'Apagar todos os dados da filial',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.servicoService.remove(servico).then(
              res => {
                this.presentAlert("Aviso", "Apagado com sucesso!");
                this.refreshFilias();
              },
              erro => {
                this.presentAlert("Erro", "Ao apagar o item!");
              }
            )
          }
        }
      ]
    });
    await alert.present();
  }

  refreshFilias() {
    this.servicoService.getAll().subscribe(
      res => {
        this.servico = res;
      }
    )
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