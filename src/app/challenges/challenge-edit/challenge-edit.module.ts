import { NgModule } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengeEditComponent } from './challenge-edit.component';
import { SharedModule } from '~/app/shared/shared.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';


@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [ NativeScriptCommonModule,
        SharedModule, 
        NativeScriptRouterModule.forChild([{ path: '', component: ChallengeEditComponent}])
    ]
})
export class ChallengeEditModule {

}