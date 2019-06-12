import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { Subscription } from 'rxjs';

import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui.service';
import { ChallangeService } from '../challenge.service';
import { Challenge } from '../challenge.model';
import { Day, DayStatus } from '../day.model';


@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: [
    './_current-challenge.component.common.scss',
    './current-challenge.component.scss'],
  moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  currentChallenge: Challenge
  curChallengeSub: Subscription;

  constructor(private modalDialog: ModalDialogService,
    private iuService: UIService,
    private challengeService: ChallangeService,
    private vcRef: ViewContainerRef) { }

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallange.subscribe(challange => {
      this.currentChallenge = challange;
    });
  }

  getIsSettable(dayInMonth: number) {
    return dayInMonth <= new Date().getDate();
  }

  getRow(index: number, day: { dayInMonth: number, dayInWeek: number }) {
    const startRow = 1;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
    return startRow + weekRow + irregularRow;
  }

  onChangeStatus(day: Day) {
    if (!this.getIsSettable(day.dayInMonth)) {
      return;
    }

    this.modalDialog.showModal(DayModalComponent, {
      fullscreen: true,
      viewContainerRef: this.iuService.getRootVCRef() ? this.iuService.getRootVCRef() : this.vcRef,
      context: { date: day.date }
    }).then((status: DayStatus) => {
      this.challengeService.updateDay(day.dayInMonth, status);
    });
  }

  ngOnDestroy() {
    if (this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }

}
