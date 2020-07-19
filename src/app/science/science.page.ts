import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { ModalController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {

  mScience: Array<any>;

  constructor(private newsApi: DataService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.newsApi.getScienceNews().subscribe(data => this.mScience = data['articles'])
  }
  
  doRefresh(event){
    this.newsApi.getScienceNews().subscribe(data => this.mScience = data['articles'])
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
