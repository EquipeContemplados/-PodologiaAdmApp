import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'perfilAgendamento/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-agendamento/perfil-agendamento.module').then(m => m.PerfilAgendamentoPageModule)
          }
        ]
      },
      {
        path: 'addAgendamento/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add-agendamento/add-agendamento.module').then(m => m.AddAgendamentoPageModule)
          }
        ]
      },
      {
        path: 'addAgendamento',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-agendamento/add-agendamento.module').then(m => m.AddAgendamentoPageModule)
          }
        ]
      },
      {
        path: 'addContato',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-contato/add-contato.module').then(m => m.AddContatoPageModule)
          }
        ]
      },
      {
        path: 'addContato/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-contato/add-contato.module').then(m => m.AddContatoPageModule)
          }
        ]
      },
      {
        path: 'listAgendamento',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-agendamento/list-agendamento.module').then(m => m.ListAgendamentoPageModule)
          }
        ]
      },
      {
        path: 'listContato',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-contato/list-contato.module').then(m => m.ListContatoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
