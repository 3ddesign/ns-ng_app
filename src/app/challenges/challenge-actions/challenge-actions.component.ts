import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DayStatus } from '../day.model';

@Component({
  selector: 'ns-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss'],
  moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit {
  @Output() actionSelect = new EventEmitter<DayStatus>();
  @Input() cancelText = 'Cancel';
  action: 'completed' | 'failed' = null;

  constructor() { }

  ngOnInit() {
  }

  onAction(action: 'completed' | 'failed' | 'cancel') {
    let status = DayStatus.Open;
    if (action === 'completed') {
      this.action = 'completed'
      status = DayStatus.Completed;
    } else if (action === 'failed') {
      this.action = 'failed'
      status = DayStatus.Failed;
    } else if (action === 'cancel') { 
      this.action = null;
    }
    this.actionSelect.emit(status);
  }

}
