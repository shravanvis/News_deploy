import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthPageRoutingModule } from './health-routing.module';

import { HealthPage } from './health.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [HealthPage],
  providers: [DataService]
})
export class HealthPageModule {}
