import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

/*
当 TypeScript 看到@Injectable()装饰器时，就会生成本服务的元数据。如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
作为一项最佳实践，无论是出于提高统一性还是减少变更的目的， 都应该从一开始就加上@Injectable()装饰器。
 */
@Injectable()
export class HeroService {

    private heroesUrl='app/heroes';
    private headers=new Headers({'Content-Type':'application/json'});

    constructor(private http:Http)
    {

    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response=>response.json().data as Hero[])
                .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHero(id:number): Promise<Hero> {
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id==id));
    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise<Hero[]>(reslove=>setTimeout(reslove,2000))
        .then(()=>this.getHeroes());
    }

    update(hero:Hero):Promise<Hero>{
        const url=`${this.heroesUrl}/${hero.id}`;
        return this.http
                .put(url,JSON.stringify(hero),{headers:this.headers})
                .toPromise()
                .then(()=>hero)
                .catch(this.handleError)
    }

    create(name: string): Promise<Hero> {
        return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
}