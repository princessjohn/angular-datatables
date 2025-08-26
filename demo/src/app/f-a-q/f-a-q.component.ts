import { Component, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
    selector: 'app-f-a-q',
    templateUrl: './f-a-q.component.html',
    styleUrls: ['./f-a-q.component.css'],
    // standalone: false
    imports: [ MarkdownComponent],
})
export class FAQComponent implements OnInit {

  constructor() { }

  faqMd = 'assets/docs/faq.md';

  ngOnInit(): void {
  }

  onLoad(event: any) {
    // Hide Copy button
    $('.toolbar').hide();

    // red color for questions
    $('h5').css('color', 'red');
  }

}
