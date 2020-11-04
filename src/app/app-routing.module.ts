import { AccountComponent } from './pages/account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{ path: '', component: AccountComponent},
{
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
} // component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
