import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengeEditComponent } from './challenge-edit.component';
import { SharedModule } from '~/app/shared/shared.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [ NativeScriptCommonModule, NativeScriptFormsModule,
        SharedModule, 
        NativeScriptRouterModule.forChild([{ path: '', component: ChallengeEditComponent}])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeEditModule {

}