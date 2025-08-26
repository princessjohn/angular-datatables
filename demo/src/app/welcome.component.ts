import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    // standalone: false,
    imports: [ MarkdownComponent],
})
export class WelcomeComponent {

  installMd = 'assets/docs/welcome/installation.md';
}
