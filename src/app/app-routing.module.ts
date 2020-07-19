import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./top-headlines-from-india/top-headlines-from-india.module').then( m => m.TopHeadlinesFromIndiaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.module').then( m => m.TechnologyPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'top-headlines-from-india',
    loadChildren: () => import('./top-headlines-from-india/top-headlines-from-india.module').then( m => m.TopHeadlinesFromIndiaPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'everything',
    loadChildren: () => import('./everything/everything.module').then( m => m.EverythingPageModule)
  },
  {
    path: 'news-sources',
    loadChildren: () => import('./news-sources/news-sources.module').then( m => m.NewsSourcesPageModule)
  },
  {
    path: 'search-news',
    loadChildren: () => import('./search-news/search-news.module').then( m => m.SearchNewsPageModule)
  },
  {
    path: 'suggested-topics',
    loadChildren: () => import('./suggested-topics/suggested-topics.module').then( m => m.SuggestedTopicsPageModule)
  },
  {
    path: 'india',
    loadChildren: () => import('./india/india.module').then( m => m.IndiaPageModule)
  },
  {
    path: 'politics',
    loadChildren: () => import('./politics/politics.module').then( m => m.PoliticsPageModule)
  },
  {
    path: 'automobiles',
    loadChildren: () => import('./automobiles/automobiles.module').then( m => m.AutomobilesPageModule)
  },
  {
    path: 'fashion',
    loadChildren: () => import('./fashion/fashion.module').then( m => m.FashionPageModule)
  },
  {
    path: 'travel',
    loadChildren: () => import('./travel/travel.module').then( m => m.TravelPageModule)
  },
  {
    path: 'caa',
    loadChildren: () => import('./caa/caa.module').then( m => m.CAAPageModule)
  },
  {
    path: 'startups',
    loadChildren: () => import('./startups/startups.module').then( m => m.StartupsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
