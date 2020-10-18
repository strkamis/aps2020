import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardEventComponent } from 'aps2020/src/app/card-event/card-event.component';
import { from } from 'rxjs';
import { CadastroEventComponent } from './cadastro-event/cadastro-event.component';

import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home',  component: HomeComponent},
  { path: 'cadastro', component: CadastroEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
