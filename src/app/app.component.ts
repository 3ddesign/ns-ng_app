import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { UIService } from './shared/ui.service';
import { Subscription } from 'rxjs';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent
  activeChalange = '';
  private drawerSub: Subscription;
  private drawer: RadSideDrawer;

  constructor(private uiService: UIService, private changeDetectionRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.drawerSub = this.uiService.drawerState.subscribe(item => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    })
  }
  onLogout() {
    this.uiService.toggleDrawer();
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
  }

  onChallengeInput(challengeDescription: string) {
    this.activeChalange = challengeDescription;
  }

  ngOnDestroy() {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  }
}
