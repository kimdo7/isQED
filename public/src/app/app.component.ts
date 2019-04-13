import { Component } from '@angular/core';
// import { HttpService } from './http.service';
import { PwaService } from './service/pwa/pwa.service';
// import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        public pwaService: PwaService,
    ) { }

    ngOnInit() {

    }

    installPwa(): void {
        this.pwaService.promptEvent.prompt();
    }

}
