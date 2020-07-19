import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSourcesPageRoutingModule } from './news-sources-routing.module';

import { NewsSourcesPage } from './news-sources.page';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSourcesPageRoutingModule,
    MaterialModule
  ],
  declarations: [NewsSourcesPage]
})
export class NewsSourcesPageModule {}
