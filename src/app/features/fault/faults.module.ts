import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaultsComponent } from './faults-list/faults.component';
import { FaultDetailsComponent } from './fault-details/fault-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FaultCardComponent } from './fault-card/fault-card.component';
import { FaultService } from '../fault/services/fault.service';
import { HttpClientModule } from '@angular/common/http';
import { FaultTemplateFormComponent } from './fault-template-form/fault-template-form.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FaultsComponent },
      { path: 'details/:id', component: FaultDetailsComponent },
      { path: 'edit/:id', component: FaultTemplateFormComponent },
      { path: 'add', component: FaultTemplateFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    FaultsComponent,
    FaultDetailsComponent,
    FaultCardComponent,
    FaultTemplateFormComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FaultsComponent,
    FaultTemplateFormComponent,
    FaultDetailsComponent,
    FaultCardComponent,
  ],
  providers: [FaultService],
})
export class FaultsModule {}
