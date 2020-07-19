import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopHeadlinesFromIndiaPageRoutingModule } from './top-headlines-from-india-routing.module';

import { TopHeadlinesFromIndiaPage } from './top-headlines-from-india.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopHeadlinesFromIndiaPageRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [TopHeadlinesFromIndiaPage],
  providers: [DataService]
})
export class TopHeadlinesFromIndiaPageModule {}
