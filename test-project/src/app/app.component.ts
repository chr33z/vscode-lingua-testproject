import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public title = 'test-project';
    public combinedTranslation = '';

    constructor(private translate: TranslateService) {
        this.combinedTranslation = translate.instant('combine.' + '0');
    }
}
