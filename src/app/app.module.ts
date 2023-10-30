import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaultsComponent } from './fault/faults-list/faults.component';
import { FaultDetailsComponent } from './fault/fault-details/fault-details.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FaultsModule } from './fault/faults.module';
import { HttpClientModule } from '@angular/common/http';
import { FaultTemplateFormComponent } from './fault/fault-template-form/fault-template-form.component';
import { FormsModule } from '@angular/forms';
import { AddFaultComponent } from './fault/add-fault/add-fault.component';
import { EditFaultComponent } from './fault/edit-fault/edit-fault.component';

@NgModule({
  declarations: [AppComponent, AddFaultComponent, EditFaultComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FaultsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
