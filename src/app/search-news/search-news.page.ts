import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.page.html',
  styleUrls: ['./search-news.page.scss'],
})
export class SearchNewsPage implements OnInit {
  news: any;
  url : '';
  searchTerm: any;
  
    mEverything:Array<any>;
    mFind: Array<any>;
  
    constructor(private newsApi: DataService) { }
  
    ngOnInit() {
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

   doRefresh(event){
    this.searhArticles("");
    setTimeout(()=>{
      event.target.complete();
    },1000)
  }
  
  }
