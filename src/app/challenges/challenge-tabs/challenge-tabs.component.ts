import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { ChallangeService } from '../challenge.service';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
  moduleId: module.id
})
export class ChallengeTabsComponent implements OnInit {
  isLoading = false;

  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute,
    private page: Page,
    private challengeService: ChallangeService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.challengeService.fetchCurrentChallange().subscribe(res => {
      console.log('fetching challenge');
      this.isLoading = false;
      this.loadTabRoutes();
    }, err => {
      this.isLoading = false;
      this.loadTabRoutes();
      console.log(err);
    });

    this.page.actionBarHidden = true;
  }

  private loadTabRoutes() {
    setTimeout(() => {
      this.router.navigate(
        [
          {
            outlets: { currentChallenge: ['current-challenge'], today: ['today'] }
          }
        ],
        {
          relativeTo: this.active
        }
      );
    }, 10);
  }
}
