import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.page.html',
  styleUrls: ['./everything.page.scss'],
})
export class EverythingPage implements OnInit {
news: any;
url : '';
searchTerm: any;

  mEverything:Array<any>;
  mFind: Array<any>;

  constructor(private newsApi: DataService) { }

  ngOnInit() {
    // this.newsApi.getEverthing().subscribe(data => this.mEverything = data['articles'])
    // this.newsApi.getNews('bitcoin').subscribe(
    //   (res) => {
    //     this.news = res;
    //   },
    //   (err) => {
    //     console.log('The Error is ', err);
    //   }
    // );

    this.searhArticles("");
  }


  searhArticles(everything){
    console.log(everything)
    this.newsApi.getNews(everything).subscribe(
      (res) => {
        this.news = res;
      },
      (err) => {
        console.log('The Error is ', err);
      }
    );
  }

  runTimeChange(searchTerm) {
    //ToDo
    console.log("search item")
    this.searhArticles(searchTerm);
 }

  // itemSelected(news){
  //   this.newsApi.newItem = news;
  // }

  doRefresh(event){
    this.searhArticles("");
    setTimeout(()=>{
      event.target.complete();
    },2000)
  }

}
