import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ns-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss'],
  moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit {
  @Output() actionSelect = new EventEmitter<'completed' | 'failed' | 'cancel'>();
  @Input() cancelText = 'Cancel';

  constructor() { }

  ngOnInit() {
  }

  onAction(action: 'completed' | 'failed' | 'cancel') {
    this.actionSelect.emit(action);
  }

}
