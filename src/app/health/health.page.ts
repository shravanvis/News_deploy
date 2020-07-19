import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { ModalController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
  mHealth: Array<any>
  
  constructor(private newsApi: DataService,
    public modalController: ModalController){
    console.log("home component constructor is called");
  } 

  ngOnInit(){
    this.newsApi.getHealthNews().subscribe(data => this.mHealth = data['articles'])
    // this.newsApi.getHealthNews().subscribe(data => this.mHealth = data[])
  }

  doRefresh(event){
    this.newsApi.getHealthNews().subscribe(data => this.mHealth = data['articles'])
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
