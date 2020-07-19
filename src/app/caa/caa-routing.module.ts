import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CAAPage } from './caa.page';

const routes: Routes = [
  {
    path: '',
    component: CAAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CAAPageRoutingModule {}
