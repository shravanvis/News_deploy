import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { ModalController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  mBusiness: Array<any>;

  constructor(private newsApi: DataService,
    public modalController: ModalController,) { }

  ngOnInit() {
    this.newsApi.getBusinessNews().subscribe(data => this.mBusiness = data['articles'])
  }

  doRefresh(event){
    this.newsApi.getBusinessNews().subscribe(data => this.mBusiness = data['articles'])
    setTimeout(()=>{
      event.target.complete();
    },1000)
  }

  // for Discover Modal
  async openDiscover() {
    const modal = await this.modalController.create({
      component: SuggestedTopicsPage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }
  
}
