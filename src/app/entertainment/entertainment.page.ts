import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { ModalController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  mEntertainment: Array<any>;

  constructor(private newsApi: DataService,
    public modalController: ModalController) {
    console.log("Entertainment contructor is called");
   }

  ngOnInit() {
    this.newsApi.getEntertainmentNews().subscribe(data => this.mEntertainment = data['articles']);
  }

  doRefresh(event){
    this.newsApi.getEntertainmentNews().subscribe(data => this.mEntertainment = data['articles']);
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
