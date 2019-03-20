import { Component } from '@angular/core';
import { PwaService } from './service/pwa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        public pwaService: PwaService
        ) {}

    ngOnInit() {}

    installPwa(): void {
        this.pwaService.promptEvent.prompt();
    }

}
