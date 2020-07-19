import { SuggestedTopicsPage } from './../suggested-topics/suggested-topics.page';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-top-headlines-from-india',
  templateUrl: './top-headlines-from-india.page.html',
  styleUrls: ['./top-headlines-from-india.page.scss'],
})
export class TopHeadlinesFromIndiaPage implements OnInit {

  mTopHeadlinesFromIndia:Array<any>;

  constructor(private newsApi: DataService,
              public modalController: ModalController,
              private statusBar: StatusBar) {
              
                // let status bar overlay webview
                // this.statusBar.overlaysWebView(false);
              
                // set status bar to white
              // this.statusBar.backgroundColorByHexString('#ffffff');
}

  ngOnInit() {
    this.newsApi.getTopHeadlinesNews().subscribe(data => this.mTopHeadlinesFromIndia = data['articles']);
  }

  doRefresh(event){
    this.newsApi.getTopHeadlinesNews().subscribe(data => this.mTopHeadlinesFromIndia = data['articles']);
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
