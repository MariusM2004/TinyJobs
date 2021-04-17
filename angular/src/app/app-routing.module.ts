import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';


const routes: Routes = [
  {
    path: 'account',
    children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },
  { path: '**', redirectTo: 'account/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
