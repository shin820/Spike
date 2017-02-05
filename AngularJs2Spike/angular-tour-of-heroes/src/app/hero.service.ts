import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/*
当 TypeScript 看到@Injectable()装饰器时，就会生成本服务的元数据。如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
作为一项最佳实践，无论是出于提高统一性还是减少变更的目的， 都应该从一开始就加上@Injectable()装饰器。
 */
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id:number): Promise<Hero> {
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id==id));
    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise<Hero[]>(reslove=>setTimeout(reslove,2000))
        .then(()=>this.getHeroes());
    }
}