import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-suggested-topics',
  templateUrl: './suggested-topics.page.html',
  styleUrls: ['./suggested-topics.page.scss'],
})
export class SuggestedTopicsPage implements OnInit {

  constructor(private modalcontroller: ModalController,private router:Router) { }

  ngOnInit() {
  }

  CloseNotification(){
    this.modalcontroller.dismiss();
  }

  // openNotification(topic){
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       topic: topic
  //     }
  //   };
  //   this.router.navigateByUrl('/india',navigationExtras);
  // }

}
