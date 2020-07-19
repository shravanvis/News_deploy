import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobilesPage } from './automobiles.page';

const routes: Routes = [
  {
    path: '',
    component: AutomobilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobilesPageRoutingModule {}
