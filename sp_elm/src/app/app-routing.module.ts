import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
