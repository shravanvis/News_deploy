import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CAAPageRoutingModule } from './caa-routing.module';

import { CAAPage } from './caa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CAAPageRoutingModule
  ],
  declarations: [CAAPage]
})
export class CAAPageModule {}
