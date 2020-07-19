import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestedTopicsPageRoutingModule } from './suggested-topics-routing.module';

import { SuggestedTopicsPage } from './suggested-topics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuggestedTopicsPageRoutingModule
  ],
  declarations: [SuggestedTopicsPage]
})
export class SuggestedTopicsPageModule {}
