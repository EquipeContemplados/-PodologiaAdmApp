import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list-agendamento',
    loadChildren: () => import('./pages/list-agendamento/list-agendamento.module').then( m => m.ListAgendamentoPageModule)
  },
  {
    path: 'add-agendamento',
    loadChildren: () => import('./pages/add-agendamento/add-agendamento.module').then( m => m.AddAgendamentoPageModule)
  },
  {
    path: 'perfil-agendamento',
    loadChildren: () => import('./pages/perfil-agendamento/perfil-agendamento.module').then( m => m.PerfilAgendamentoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
