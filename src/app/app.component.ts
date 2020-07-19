import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Top Headlines',
      url: '/top-headlines-from-india',
      icon: 'easel'
    },
    {
      title: 'Health',
      url: '/health',
      icon: 'medkit'
    },
    {
      title: 'Business',
      url: '/business',
      icon: 'Business'
    },
    {
      title: 'Entertainment',
      url: '/entertainment',
      icon: 'film'
    },
    {
      title: 'Science',
      url: '/science',
      icon: 'earth'
    },
    {
      title: 'Sports',
      url: '/sports',
      icon: 'walk'
    },
    {
      title: 'Technology',
      url: '/technology',
      icon: 'cloud-done'
    },
    {
      title: 'News Sources',
      url: '/news-sources',
      icon: 'globe'
    },
    {
      title: 'Search News',
      url: '/search-news',
      icon: 'search'
    },
    {
      title: 'About Developer',
      url: '/about',
      icon: 'bookmark'
    },
    // {
    //   title: 'Share App',
    //   // url: '',
    //   icon: 'share'
    // }
  ];
  // public labels = ['About Developer',
  //  'Friends', 'Notes', 'Work', 'Travel', 'Reminders'
  // ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private lottieSplashcreen: LottieSplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.lottieSplashcreen.hide();
      setTimeout(() => {
        this.lottieSplashcreen.hide();
      }, 5000);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
