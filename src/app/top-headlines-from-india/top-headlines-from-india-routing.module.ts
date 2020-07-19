import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopHeadlinesFromIndiaPage } from './top-headlines-from-india.page';

const routes: Routes = [
  {
    path: '',
    component: TopHeadlinesFromIndiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopHeadlinesFromIndiaPageRoutingModule {}
