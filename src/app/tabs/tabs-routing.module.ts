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
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
