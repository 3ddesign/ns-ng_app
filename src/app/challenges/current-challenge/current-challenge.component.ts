import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui.service';

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  constructor(private modalDialog: ModalDialogService, 
    private iuService: UIService,
    private vcRef: ViewContainerRef) {}

  onChangeStatus() {
    this.modalDialog.showModal(DayModalComponent, { fullscreen: true,
       viewContainerRef: this.iuService.getRootVCRef() ? this.iuService.getRootVCRef() : this.vcRef });
  }

}
