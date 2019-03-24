import { Component } from '@angular/core';
// import { HttpService } from './http.service';
import { PwaService } from './service/pwa.service';
// import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        public pwaService: PwaService, 
        // private _httpService: HttpService
    ) { }

    ngOnInit() {
        // $(document).ready(function () {
        //     var windowHeigHttpService.height();
        //     var headearHeight = 188;
        //     var footerHeight = 188;

        // });

    }

    installPwa(): void {
        this.pwaService.promptEvent.prompt();
    }

}
