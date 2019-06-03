import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChallangeService } from '../challenge.service';
import { Day } from '../day.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id,
})
export class TodayComponent implements OnInit, OnDestroy {
  currentDay: Day;
  private currentChallengeSub: Subscription

  constructor(private challengeService: ChallangeService) { }

  ngOnInit() {
    this.currentChallengeSub = this.challengeService.currentChallange.subscribe(challenge => {
      if (challenge) {
        this.currentDay = challenge.currentDay;
      }
    });
  }

  onActionSelected(action: 'completed' | 'failed' | 'cancel') {
    console.log(action);
  }

  ngOnDestroy() {
    if (this.currentChallengeSub) {
      this.currentChallengeSub.unsubscribe();
    }
  }

}
