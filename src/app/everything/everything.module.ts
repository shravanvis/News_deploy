import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EverythingPageRoutingModule } from './everything-routing.module';

import { EverythingPage } from './everything.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EverythingPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [EverythingPage]
})
export class EverythingPageModule {}
