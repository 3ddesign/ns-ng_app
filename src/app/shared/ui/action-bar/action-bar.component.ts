import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

declare var android: any;

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton = true;

  constructor(private router: RouterExtensions, private page: Page) {}

  get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }

  onGoBack() {
    return this.router.backToPreviousPage();
  }

  ngOnInit() {
  }

  onLoaded() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor('#171717'),
          (<any>android.graphics).porterDuff.Mode.SRC_ATOP
        );
      }
    }
  }

}
