

import { DashbordAGComponent } from './dashbord-ag/dashbord-ag.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterCompteComponent } from './Accueil/consulter-compte/consulter-compte.component';


import { AgentComponent } from './agent/agent.component';


import { Page404Component } from './page404/page404.component';




const routes: Routes = [


  {path :'dashbord', component:DashbordAGComponent},


  {path:'agent',component:AgentComponent},

  { path :'', component:ConsulterCompteComponent},
  

  {path:'**', component:Page404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
