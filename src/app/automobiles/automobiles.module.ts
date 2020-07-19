import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomobilesPageRoutingModule } from './automobiles-routing.module';

import { AutomobilesPage } from './automobiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomobilesPageRoutingModule
  ],
  declarations: [AutomobilesPage]
})
export class AutomobilesPageModule {}
