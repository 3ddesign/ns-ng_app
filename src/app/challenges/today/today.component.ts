import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChallangeService } from '../challenge.service';
import { Day, DayStatus } from '../day.model';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id
})
export class TodayComponent implements OnInit, OnDestroy {
  currentDay: Day;
  private curChallengeSub: Subscription;

  constructor(private challengeService: ChallangeService) {}

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallange.subscribe(
      challenge => {
        if (challenge) {
          this.currentDay = challenge.currentDay;
        }
      }
    );
  }

  onActionSelected(action: DayStatus) {
    this.challengeService.updateDay(this.currentDay.dayInMonth, action);
  }

  getActionName() {
    if (this.currentDay.status === DayStatus.Completed) {
      return 'completed';
    }
    if (this.currentDay.status === DayStatus.Failed) {
      return 'failed';
    }
    return null;
  }

  ngOnDestroy() {
    if (this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
}
