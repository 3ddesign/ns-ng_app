import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChallangeService } from '../challenge.service';
import { Day, DayStatus } from '../day.model';
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

  onActionSelected(action: DayStatus) {
    this.challengeService.updateDay(this.currentDay.dayInMonth, action);
  }

  getActionName() {
    if (this.currentDay.status === DayStatus.Completed) {
      return 'complete';
    }
    if (this.currentDay.status === DayStatus.Failed) {
      return 'failed';
    }
    return null;
  }

  ngOnDestroy() {
    if (this.currentChallengeSub) {
      this.currentChallengeSub.unsubscribe();
    }
  }

}
