import { DashbordAGComponent } from './dashbord-ag/dashbord-ag.component';


import { OwlModule } from 'ngx-owl-carousel';

import {NgxPaginationModule} from 'ngx-pagination';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConsulterCompteComponent } from './Accueil/consulter-compte/consulter-compte.component';
import { RouterModule, Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';



import { Page404Component } from './page404/page404.component';

import { AgentComponent } from './agent/agent.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {SimpleScrollSpyModule} from "angular-simple-scroll-spy";

import { NgxSliderModule } from '@angular-slider/ngx-slider';


import { from } from 'rxjs';

import {MatButtonToggleModule} from '@angular/material/button-toggle';


import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './graphql.module';








const routes :Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    
    ConsulterCompteComponent,



    
    Page404Component, 

    
    AgentComponent,

    DashbordAGComponent,

    
  ],
  imports: [
    RouterModule.forRoot(routes),
    SimpleScrollSpyModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    
    NgxPaginationModule,
    NgxSliderModule,
    OwlModule,
    MatFormFieldModule,
   CommonModule,
   GraphQLModule
    
  
    
  ],
  providers: [],

  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
