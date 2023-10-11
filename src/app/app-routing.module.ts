import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './core/guards/auth.guard';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { VideoComponent } from './layout/video/video.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'login', 
    canActivate:[authGuard],
    component: AuthComponent,
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
