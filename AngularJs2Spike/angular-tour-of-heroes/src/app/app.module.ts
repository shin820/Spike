import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService } from './hero.service'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    //forRoot配置方法需要InMemoryDataService类实例，用来向内存数据库填充数据
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
    ],
  /*
  providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例.
  建议在根模块AppModule的providers数组中注册全应用级的服务
  */
  providers:[ HeroService ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }

