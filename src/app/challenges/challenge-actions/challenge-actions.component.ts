import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DayStatus } from '../day.model';

@Component({
  selector: 'ns-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss'],
  moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit, OnChanges {
  @Output() actionSelect = new EventEmitter<DayStatus>();
  @Input() cancelText = 'Cancel';
  @Input() chosen: 'completed' | 'failed' = null;
  @Input() startDone = false;
  action: 'completed' | 'failed' = null;
  done = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.chosen) {
      this.action = changes.chosen.currentValue;
      if (changes.chosen.currentValue === null) {
        this.done = false;
      } else {
        this.done = true;
      }
    }

    // TODO: insert it after fixing bug with loading in today component:
    // if (changes.startDone) {
    //   if (changes.startDone.currentValue) {
    //     this.done = true;
    //   }
    // }
  }

  ngOnInit() {
  }

  onAction(action: 'completed' | 'failed' | 'cancel') {
    this.done = true;
    let status = DayStatus.Open;
    if (action === 'completed') {
      this.action = 'completed'
      status = DayStatus.Completed;
    } else if (action === 'failed') {
      this.action = 'failed'
      status = DayStatus.Failed;
    } else if (action === 'cancel') {
      this.action = null;
      this.done = false;
    }
    this.actionSelect.emit(status);
  }

}
