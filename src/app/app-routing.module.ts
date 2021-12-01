import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthGuardCom } from './core/guardCom';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'list-message',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'registration',
        loadChildren: () => import('./auth/registration/basic-reg/basic-reg.module').then(m => m.BasicRegModule),
        canActivate: [AuthGuardCom]
      },
      {
        path: 'list-users',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuardCom]
      },
      {
        path: 'list-actualite',
        loadChildren: () => import('./components/list-actualite/list-actualite.module').then(m => m.ListActualiteModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-contact',
        loadChildren: () => import('./components/list-contact/list-contact.module').then(m => m.ListContactModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-devprop',
        loadChildren: () => import('./components/list-devenezprop/list-devenezprop.module').then(m => m.ListDevenezpropModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-devis',
        loadChildren: () => import('./components/list-devis/list-devis.module').then(m => m.ListDevisModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-message',
        loadChildren: () => import('./components/list-message/list-message.module').then(m => m.ListMessageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-presentation',
        loadChildren: () => import('./components/list-presentation/list-presentation.module').then(m => m.ListPresentationModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-produit',
        loadChildren: () => import('./components/list-produit/list-produit.module').then(m => m.ListProduitModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list-video',
        loadChildren: () => import('./components/list-video/list-video.module').then(m => m.ListVideoModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-video',
        loadChildren: () => import('./components/add-video/add-video.module').then(m => m.AddVideoModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-actualite',
        loadChildren: () => import('./components/add-actualite/add-actualite.module').then(m => m.AddActualiteModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-presentation',
        loadChildren: () => import('./components/add-presentation/add-presentation.module').then(m => m.AddPresentationModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-produit',
        loadChildren: () => import('./components/add-produit/add-produit.module').then(m => m.AddProduitModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-contact',
        loadChildren: () => import('./components/add-contact/add-contact.module').then(m => m.AddContactModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'update-actualite/:id',
        loadChildren: () => import('./components/update-actualite/update-actualite.module').then(m => m.UpdateActualiteModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'update-contact/:id',
        loadChildren: () => import('./components/update-contact/update-contact.module').then(m => m.UpdateContactModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'update-produit/:id',
        loadChildren: () => import('./components/update-produit/update-produit.module').then(m => m.UpdateProduitModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'update-presentation/:id',
        loadChildren: () => import('./components/update-presentation/update-presentation.module').then(m => m.UpdatePresentationModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'update-video/:id',
        loadChildren: () => import('./components/update-video/update-video.module').then(m => m.UpdateVideoModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
