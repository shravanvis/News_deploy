import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { DataService } from './../data.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-india',
  templateUrl: './india.page.html',
  styleUrls: ['./india.page.scss'],
})
export class IndiaPage implements OnInit {
  mIndia: Array<any>;

  constructor(private location: Location,
    private modalcontroller: ModalController,private router:Router,private route: ActivatedRoute,
    private newsApi: DataService ) {
      
      this.route.queryParams.subscribe(params => {
        console.log('topic:-'+params.topic);
      });
    }

  ngOnInit() {
    this.newsApi.getIndiaNews().subscribe(data => this.mIndia = data['articles'])
  }

  back(){
    this.location.back();
  }

  CloseNotification(){
    this.modalcontroller.dismiss();
  }

  doRefresh(event){
    this.newsApi.getHealthNews().subscribe(data => this.mIndia = data['articles'])
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
