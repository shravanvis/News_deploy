import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.page.html',
  styleUrls: ['./news-sources.page.scss'],
})
export class NewsSourcesPage implements OnInit {
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:DataService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

  searchArticles(source:string){
    console.log("selected source is: "+source);
    this.newsapi.getArticleByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  doRefresh(event){
        //load articles
        this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
        //load news sources
        this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    setTimeout(()=>{
      event.target.complete();
    },1000)
  }
}
