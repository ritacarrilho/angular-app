import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaultsComponent } from './faults-list/faults.component';
import { FaultDetailsComponent } from './fault-details/fault-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FaultCardComponent } from './fault-card/fault-card.component';
import { FaultService } from '../_services/fault.service';
import { HttpClientModule } from '@angular/common/http';
import { FaultTemplateFormComponent } from './fault-template-form/fault-template-form.component';

// @NgModule({
//   declarations: [
//     FaultsComponent,
//     FaultDetailsComponent,
//     FaultCardComponent,
//     FaultTemplateFormComponent,
//   ],
//   imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
//   exports: [FaultsComponent, FaultDetailsComponent, FaultCardComponent],
//   providers: [FaultService],
// })
// export class FaultsModule {}

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FaultsComponent },
      { path: 'details/:id', component: FaultDetailsComponent },
      { path: 'edit/:id', component: FaultTemplateFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    FaultsComponent,
    FaultDetailsComponent,
    FaultCardComponent,
    FaultTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [FaultsComponent, FaultDetailsComponent, FaultCardComponent],
  providers: [FaultService],
})
export class FaultsModule {}
