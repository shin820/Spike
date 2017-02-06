import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    heroes:Hero[]=[];
    /*
    组件类应保持精简。组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。 它们把这些任务委托给服务。
    组件的任务就是提供用户体验，仅此而已。
     */
    constructor(private heroService:HeroService) { }

    ngOnInit() { 
     this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5))
    }
}