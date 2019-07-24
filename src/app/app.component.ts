import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';

import { UIService } from './shared/ui.service';
import { Subscription } from 'rxjs';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { AuthService } from './auth/auth.service';

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

  constructor(
    private uiService: UIService, 
    private authService: AuthService,
    private changeDetectionRef: ChangeDetectorRef,
    private vcRef: ViewContainerRef) { }

  ngOnInit() {
    this.authService.autoLogin().subscribe(success => {
    });

    this.drawerSub = this.uiService.drawerState.subscribe(item => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    })
    this.uiService.setRootVCRef(this.vcRef);
  }
  onLogout() {
    this.uiService.toggleDrawer();
    this.authService.logout();
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
