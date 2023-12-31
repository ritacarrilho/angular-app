import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaultsComponent } from './features/fault/faults-list/faults.component';
import { FaultDetailsComponent } from './features/fault/fault-details/fault-details.component';

const routes: Routes = [
  {
    path: '',
    component: FaultsComponent,
    pathMatch: 'full',
  },
  {
    path: 'faults',
    loadChildren: () =>
      import('./features/fault/faults.module').then((m) => m.FaultsModule),
  },
  // { path: 'faults', component: FaultsComponent },
  // { path: 'faults/:id', component: FaultDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
