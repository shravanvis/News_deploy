import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntertainmentPageRoutingModule } from './entertainment-routing.module';

import { EntertainmentPage } from './entertainment.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntertainmentPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [EntertainmentPage],
  providers: [DataService]
})
export class EntertainmentPageModule {}
