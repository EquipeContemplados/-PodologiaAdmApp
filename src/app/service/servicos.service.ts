import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Servico } from '../model/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(
    protected fire: AngularFirestore
    
  ) { }

  save(servico) {
    return this.fire.collection("servicos")
      .add({
        nome: servico.nome,
        data: servico.data,
        horario: servico.horario,
        procedimento: servico.procedimento,
        mensagem: servico.mensagem
      });
  }

  getAll() {
    return this.fire.collection("servicos").snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id) {
    return this.fire.collection("servicos").doc<Servico>(id).valueChanges();
  }
  update(servico: Servico, id: string) {
    return this.fire.collection("servicos").doc<Servico>(id)
    .update(servico);
  }

  remove(servico: any) {
    return this.fire.collection("servicos").doc(servico.key).delete();
  }
}