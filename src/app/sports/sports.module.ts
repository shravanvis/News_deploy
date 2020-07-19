import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsPageRoutingModule } from './sports-routing.module';

import { SportsPage } from './sports.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [SportsPage],
  providers: [DataService]
})
export class SportsPageModule {}
