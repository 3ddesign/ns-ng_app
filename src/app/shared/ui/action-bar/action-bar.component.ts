import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { UIService } from '../../ui.service';

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
  @Input() hasMenu = true;

  constructor(private router: RouterExtensions,
    private page: Page,
    private uiService: UIService) { }

  ngOnInit() {
  }

  get android() {
    return isAndroid;
  }

  get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }

  onGoBack() {
    return this.router.backToPreviousPage();
  }

  onToggleMenu() {
    this.uiService.toggleDrawer();
  }

  onLoaded() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      let color = '#171717';
      if (this.hasMenu) {
        color = '#ffffff';
      }
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor(color),
          (<any>android.graphics).porterDuff.Mode.SRC_ATOP
        );
      }
    }
  }

}
