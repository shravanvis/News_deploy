import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { DataService } from './../data.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.page.html',
  styleUrls: ['./politics.page.scss'],
})
export class PoliticsPage implements OnInit {
  mPolitics: Array<any>;

  constructor(private location: Location,
    private modalcontroller: ModalController,private router:Router,private route: ActivatedRoute,
    private newsApi: DataService ) {
    }

  ngOnInit() {
    this.newsApi.getPoliticsNews().subscribe(data => this.mPolitics = data['articles'])
  }

  back(){
    this.location.back();
  }

  CloseNotification(){
    this.modalcontroller.dismiss();
  }

  doRefresh(event){
    this.newsApi.getHealthNews().subscribe(data => this.mPolitics = data['articles'])
    setTimeout(()=>{
      event.target.complete();
    },1000)
  }

  // for Discover Modal
  async openDiscover() {
    const modal = await this.modalcontroller.create({
      component: SuggestedTopicsPage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }

}
