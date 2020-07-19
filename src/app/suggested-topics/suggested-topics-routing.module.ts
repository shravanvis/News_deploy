import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestedTopicsPage } from './suggested-topics.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestedTopicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestedTopicsPageRoutingModule {}
