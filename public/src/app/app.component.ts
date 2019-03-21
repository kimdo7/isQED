import { Component } from '@angular/core';
import { PwaService } from './service/pwa.service';
// import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        public pwaService: PwaService
    ) { }

    ngOnInit() {
        // $(document).ready(function () {
        //     var windowHeight = $(window).height();
        //     var headearHeight = 188;
        //     var footerHeight = 188;

        // });

    }

    installPwa(): void {
        this.pwaService.promptEvent.prompt();
    }

}
