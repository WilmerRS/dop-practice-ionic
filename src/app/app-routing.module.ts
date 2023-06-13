import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'notification/:id',
    loadChildren: () =>
      import('src/app/pages/view-message/view-message.module').then(
        m => m.ViewMessagePageModule
      ),
  },
  {
    path: 'profile/edit',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
