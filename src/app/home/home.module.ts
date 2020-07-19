import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [HomePage],
  providers: [DataService]
})
export class HomePageModule {}
