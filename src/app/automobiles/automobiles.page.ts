import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { DataService } from './../data.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.page.html',
  styleUrls: ['./automobiles.page.scss'],
})
export class AutomobilesPage implements OnInit {
  mAutomobiles: Array<any>;

  constructor(private location: Location,
    private modalcontroller: ModalController,private router:Router,private route: ActivatedRoute,
    private newsApi: DataService ) {
    }

  ngOnInit() {
    this.newsApi.getAutomobliesNews().subscribe(data => this.mAutomobiles = data['articles'])
  }

  back(){
    this.location.back();
  }

  CloseNotification(){
    this.modalcontroller.dismiss();
  }

  doRefresh(event){
    this.newsApi.getAutomobliesNews().subscribe(data => this.mAutomobiles = data['articles'])
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
