import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologyPageRoutingModule } from './technology-routing.module';

import { TechnologyPage } from './technology.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologyPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [TechnologyPage],
  providers: [DataService]
})
export class TechnologyPageModule {}
