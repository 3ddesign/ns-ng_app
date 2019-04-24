import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutesModule } from './app-routing.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { DayModalComponent } from './challenges/day-modal/day-modal.component'
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [ SharedModule, NativeScriptModule, NativeScriptFormsModule, NativeScriptUISideDrawerModule, AppRoutesModule],
  declarations: [AppComponent, AuthComponent, DayModalComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DayModalComponent]
})

export class AppModule {}
