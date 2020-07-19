import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { ModalController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {

  mTechnology: Array<any>;

  constructor(private newsApi: DataService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.newsApi.getTechnologyNews().subscribe(data => this.mTechnology = data['articles']);
  }

  doRefresh(event){
    this.newsApi.getTechnologyNews().subscribe(data => this.mTechnology = data['articles']);
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
