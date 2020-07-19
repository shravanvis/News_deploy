import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SciencePageRoutingModule } from './science-routing.module';

import { SciencePage } from './science.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SciencePageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [SciencePage],
  providers: [HttpClientModule]
})
export class SciencePageModule {}
