import { Component } from '@angular/core';
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl:'app.component.html',
    styleUrls:['app.component.css']
})
export class AppComponent { 
    title='Tour of Heroes';
}
