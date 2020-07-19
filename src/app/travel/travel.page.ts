import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { DataService } from './../data.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage implements OnInit {
  mTravel: Array<any>;

  constructor(private location: Location,
    private modalcontroller: ModalController,private router:Router,private route: ActivatedRoute,
    private newsApi: DataService ) {
    }

  ngOnInit() {
    this.newsApi.getTravelNews().subscribe(data => this.mTravel = data['articles'])
  }

  back(){
    this.location.back();
  }

  CloseNotification(){
    this.modalcontroller.dismiss();
  }

  doRefresh(event){
    this.newsApi.getTravelNews().subscribe(data => this.mTravel = data['articles'])
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
