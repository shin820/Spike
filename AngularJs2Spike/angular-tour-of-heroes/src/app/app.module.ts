import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService } from './hero.service'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path:'',
      redirectTo:'/dashboard',
      pathMatch:'full',
    },
    {
      path:'heroes',
      component: HeroesComponent
    },
    {
      path:'detail/:id',
      component:HeroDetailComponent
    },
    {
      path:'dashboard',
      component: DashboardComponent
    }
  ])
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
    ],
  /*providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例.*/
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

