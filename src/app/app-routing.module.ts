import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list-agenda',
    loadChildren: () => import('./pages/list-agenda/list-agenda.module').then( m => m.ListAgendaPageModule)
  },
  {
    path: 'add-servico',
    loadChildren: () => import('./pages/add-servico/add-servico.module').then( m => m.AddServicoPageModule)
  },
  {
    path: 'list-servicos',
    loadChildren: () => import('./pages/list-servicos/list-servicos.module').then( m => m.ListServicosPageModule)
  },
  {
    path: 'perfil-servico',
    loadChildren: () => import('./pages/perfil-servicos/perfil-servicos.module').then( m => m.PerfilServicosPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
