import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { DtVersionService } from './dt-version.service';

declare var M: any; // Materialize namespace

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  routerEventsSub$!: Subscription;
  dtVersion: 'v2' | 'v1' = 'v2';

  constructor(
    private router: Router,
    private dtVersionService: DtVersionService
  ) {
    this.dtVersion = dtVersionService.dtVersion;
  }

  ngOnInit(): void {
    // Re-initialize tabs and collapsibles on route change
    this.routerEventsSub$ = this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          const tabsElems = document.querySelectorAll('ul.tabs');
          if (tabsElems.length) M.Tabs.init(tabsElems);

          const collapsibleElems = document.querySelectorAll('.collapsible');
          if (collapsibleElems.length) M.Collapsible.init(collapsibleElems);
        }, 100);
      });
  }

  ngAfterViewInit(): void {
    // Initialize sidenav
    const sidenavElems = document.querySelectorAll('.sidenav');
    if (sidenavElems.length) M.Sidenav.init(sidenavElems, { edge: 'left', draggable: true });

    // Initialize dropdowns
    const dropdownElems = document.querySelectorAll('.dt-version-button');
    if (dropdownElems.length) {
      M.Dropdown.init(dropdownElems, {
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true,
        hover: false,
        gutter: 14,
        coverTrigger: false,
        alignment: 'left'
      });
    }
  }

  onDTVersionChanged(v: 'v2' | 'v1') {
    this.dtVersion = v;
    this.dtVersionService.versionChanged$.next(v);
  }

  ngOnDestroy(): void {
    this.routerEventsSub$?.unsubscribe();
  }
}
