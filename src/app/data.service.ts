import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newItem: any;

  // apiKey="17d5e230b8bd45c689120c58872a6eb2";
  // apiKey="923879e229984bae9f273a46757d8848";
  // apiKey="5c9362103a3b4ba2b84a35306a51dd01";
  // apiKey="af2a71fa68d740f18177eb5fdad20421";
  // apiKey="c2269e848a804196b188af2940de7017";
  // apiKey="423d21a515a7439189fb6c3063285431";
  apiKey="75a5c6959e6c457fbbdd536c4d4f9502";


  healthApi="http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey="

  businessApi="http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="

  entertainmentApi="http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey="
  
  scienceApi="http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="
  
  sportsApi="http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="
  
  technologyApi="http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey="
  
  TopHeadlinesApi="http://newsapi.org/v2/top-headlines?country=in&apiKey="

  initSourcesApi="http://newsapi.org/v2/sources?language=en&apiKey="

  // initArticlesApi="https://newsapi.org/v2/top-headlines?&apiKey=";
  initArticlesApi="http://newsapi.org/v2/top-headlines?language=en&apiKey=";

  getArtclesApi="http://newsapi.org/v2/top-headlines?sources="

  getEverythingApi="http://newsapi.org/v2/everything?q=&apiKey=";

  
  
  
  
  
  indiaApi="http://newsapi.org/v2/everything?q=india&apiKey=";

  politicsApi="http://newsapi.org/v2/everything?q=politics&apiKey=";

  automobilesApi="http://newsapi.org/v2/everything?q=automobiles&apiKey=";

  fashionApi="http://newsapi.org/v2/everything?q=fashion&apiKey="

  travelApi="http://newsapi.org/v2/everything?q=travel&apiKey=";

  CAAAPI="http://newsapi.org/v2/everything?q=CAA&apiKey=";

  startupsApi="http://newsapi.org/v2/everything?q=startups&apiKey=";

  constructor(private http: HttpClient){

  }

  getHealthNews(){
    return this.http.get(this.healthApi+this.apiKey);
  }

  getBusinessNews(){
    return this.http.get(this.businessApi + this.apiKey);
  }

  getEntertainmentNews(){
    return this.http.get(this.entertainmentApi + this.apiKey);
  }

  getScienceNews(){
    return this.http.get(this.scienceApi + this.apiKey);
  }

  getSportsNews(){
    return this.http.get(this.sportsApi + this.apiKey);
  }

  getTechnologyNews(){
    return this.http.get(this.technologyApi + this.apiKey);
  }

  getTopHeadlinesNews(){
    return this.http.get(this.TopHeadlinesApi + this.apiKey);
  }


initArticles(){
  return this.http.get(this.initArticlesApi+this.apiKey);
}

initSources(){
  return this.http.get(this.initSourcesApi+this.apiKey);
}
//  initArticles(){
//   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.apiKey);
//  }
 
  getArticleByID(source: String){
    return this.http.get(this.getArtclesApi+source+'&apiKey='+this.apiKey);
  }

  // getEverthing(){
  //   return this.http.get(this.getEverythingApi+this.apiKey)
  //   // return this.http.get('http://newsapi.org/v2/everything?q=bitcoin&apiKey=17d5e230b8bd45c689120c58872a6eb2');
  // }

  // getEverthingByID(everything: String){
  //   return this.http.get('https://newsapi.org/v2/everything?'+everything+'&apiKey='+this.apiKey)
  //   // return this.http.get('http://newsapi.org/v2/everything?q=bitcoin&apiKey=17d5e230b8bd45c689120c58872a6eb2');
  // }

  getNews(url){
    return this.http.get('http://newsapi.org/v2/everything?q='+url+'&apiKey='+this.apiKey);
  }




  getIndiaNews(){
    return this.http.get(this.indiaApi+this.apiKey);
  }

  getPoliticsNews(){
    return this.http.get(this.politicsApi+this.apiKey);
  }

  getAutomobliesNews(){
    return this.http.get(this.automobilesApi+this.apiKey);
  }

  getFashionNews(){
    return this.http.get(this.fashionApi+this.apiKey);
  }

  getTravelNews(){
    return this.http.get(this.travelApi+this.apiKey);
  }

  getCAANews(){
    return this.http.get(this.CAAAPI+this.apiKey);
  }

  getStartupsNews(){
    return this.http.get(this.startupsApi+this.apiKey);
  }

}
