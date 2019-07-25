import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthGuard} from './@core/data/auth.guard';

const routes: Routes = [
  // {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard]},
  // {
  //   path: 'auth',
  //   component: LoginFormComponent,
  // },
  {path: '', component: LoginFormComponent, pathMatch: 'full'},
  // {path: '**', redirectTo: 'auth'}
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
