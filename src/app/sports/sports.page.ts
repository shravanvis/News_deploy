import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { ModalController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  mSports: Array<any>;

  constructor(private newsApi: DataService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.newsApi.getSportsNews().subscribe(data => this.mSports = data['articles']);
  }

  doRefresh(event){
    this.newsApi.getSportsNews().subscribe(data => this.mSports = data['articles']);
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
