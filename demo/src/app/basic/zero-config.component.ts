import { Component } from '@angular/core';
import {BaseDemoComponent} from "../base-demo/base-demo.component";
import {DataTablesModule} from "../../../../lib";

@Component({
    selector: 'app-zero-config',
    templateUrl: 'zero-config.component.html',
  imports:[BaseDemoComponent, DataTablesModule]
})
export class ZeroConfigComponent {

  pageTitle = 'Zero configuration';
  mdIntro = 'assets/docs/basic/zero-config/intro.md';
  mdHTML = 'assets/docs/basic/zero-config/source-html.md';
  mdTSV1 = 'assets/docs/basic/zero-config/source-ts.md';


}
