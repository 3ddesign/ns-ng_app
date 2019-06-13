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
  action: 'completed' | 'failed' = null;
  isDone = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.chosen) {
      this.action = changes.chosen.currentValue;
    }
  }

  ngOnInit() {
  }

  onAction(action: 'completed' | 'failed' | 'cancel') {
    this.isDone = true;
    let status = DayStatus.Open;
    if (action === 'completed') {
      this.action = 'completed'
      status = DayStatus.Completed;
    } else if (action === 'failed') {
      this.action = 'failed'
      status = DayStatus.Failed;
    } else if (action === 'cancel') {
      this.action = null;
      this.isDone = false;
    }
    this.actionSelect.emit(status);
  }

}
