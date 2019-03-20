import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { HttpService } from './service/http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    joke : any
    constructor(update: SwUpdate, private httpService: HttpService) {
        update.available.subscribe(event => {
            update.activateUpdate().then(() => document.location.reload())
        })

    }

    ngOnInit(){
        this.httpService.gimmeJoke().subscribe(res => {
            this.joke = res
        })
    }

}
