import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessPageRoutingModule } from './business-routing.module';

import { BusinessPage } from './business.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [BusinessPage],
  providers: [DataService]
})
export class BusinessPageModule {}
