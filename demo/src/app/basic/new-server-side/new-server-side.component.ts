import { Component } from "@angular/core";
import { Config } from "datatables.net";
import {BaseDemoComponent} from "../../base-demo/base-demo.component";
import {DataTablesModule} from "../../../../../lib";

@Component({
    selector: "app-new-server-side",
    templateUrl: "./new-server-side.component.html",
    styleUrls: ["./new-server-side.component.css"],
  imports:[BaseDemoComponent, DataTablesModule]
})
export class NewServerSideComponent {
  pageTitle = "Server-side processing";
  mdIntro = "assets/docs/basic/new-server-side/intro.md";
  mdHTML = "assets/docs/basic/new-server-side/source-html.md";
  mdTS = "assets/docs/basic/new-server-side/source-ts.md";
  mdTSV1 = "assets/docs/basic/new-server-side/source-ts-dtv1.md";

  dtOptions: Config = {};
}
