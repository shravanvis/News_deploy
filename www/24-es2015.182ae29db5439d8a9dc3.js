(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{E4gg:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var u=t("pMnS"),s=t("MKJQ"),r=t("sZkV"),o=t("bujt"),a=t("Fwaw"),b=t("5GAg"),h=t("omvX"),p=t("SVse"),c=t("mrSG"),g=t("0AVW"),y=t("R7Hv");class d{constructor(l,n){this.newsApi=l,this.modalController=n,console.log("home component constructor is called")}ngOnInit(){this.newsApi.getHealthNews().subscribe(l=>this.mHealth=l.articles)}doRefresh(l){this.newsApi.getHealthNews().subscribe(l=>this.mHealth=l.articles),setTimeout(()=>{l.target.complete()},1e3)}openDiscover(){return c.a(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:g.a,cssClass:"half-modal"});return yield l.present()}))}}var C=e.qb({encapsulation:0,styles:[[".icon[_ngcontent-%COMP%]{display:inline-block;font-size:12px;color:silver;vertical-align:middle}.text[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-size:12px;color:silver}"]],data:{}});function w(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,41,"ion-slide",[],null,null,null,s.X,s.w)),e.rb(1,49152,null,0,r.kb,[e.h,e.k,e.y],null,null),(l()(),e.sb(2,0,null,0,39,"ion-card",[],null,null,null,s.H,s.d)),e.rb(3,49152,null,0,r.j,[e.h,e.k,e.y],null,null),(l()(),e.sb(4,0,null,0,0,"img",[["style","background-color:grey"]],[[8,"src",4]],null,null,null,null)),(l()(),e.sb(5,0,null,0,4,"ion-card-header",[],null,null,null,s.F,s.f)),e.rb(6,49152,null,0,r.l,[e.h,e.k,e.y],null,null),(l()(),e.sb(7,0,null,0,2,"ion-card-title",[],null,null,null,s.G,s.g)),e.rb(8,49152,null,0,r.n,[e.h,e.k,e.y],null,null),(l()(),e.Kb(9,0,["",""])),(l()(),e.sb(10,0,null,0,14,"ion-card-content",[["style","text-align: left;"]],null,null,null,s.E,s.e)),e.rb(11,49152,null,0,r.k,[e.h,e.k,e.y],null,null),(l()(),e.sb(12,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Description :"])),(l()(),e.Kb(14,0,[" "," "])),(l()(),e.sb(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.sb(16,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.sb(17,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Content :"])),(l()(),e.Kb(19,0,[" "," "])),(l()(),e.sb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.sb(21,0,null,0,3,"div",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,2,"a",[["mat-stroked-button",""]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Eb(l,23)._haltDisabledEvents(t)&&i),i}),o.c,o.a)),e.rb(23,180224,null,0,a.a,[b.g,e.k,[2,h.a]],null,null),(l()(),e.Kb(-1,0,["Read More"])),(l()(),e.sb(25,0,null,0,10,"ion-card-content",[["style","background-color: rgb(201, 201, 201);"]],null,null,null,s.E,s.e)),e.rb(26,49152,null,0,r.k,[e.h,e.k,e.y],null,null),(l()(),e.sb(27,0,null,0,8,"div",[["style","line-height: 0.5"]],null,null,null,null,null)),(l()(),e.sb(28,0,null,null,3,"p",[["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),e.sb(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Source Name : "])),(l()(),e.Kb(31,null,[" ",""])),(l()(),e.sb(32,0,null,null,3,"p",[["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),e.sb(33,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Published At : "])),(l()(),e.Kb(35,null,[" ",""])),(l()(),e.sb(36,0,null,0,5,"ion-item",[["color","dark"],["style","text-align: center;"]],null,null,null,s.O,s.n)),e.rb(37,49152,null,0,r.E,[e.h,e.k,e.y],{color:[0,"color"]},null),(l()(),e.sb(38,0,null,0,1,"ion-icon",[["class","icon"],["name","chevron-back"]],null,null,null,s.M,s.l)),e.rb(39,49152,null,0,r.z,[e.h,e.k,e.y],{name:[0,"name"]},null),(l()(),e.sb(40,0,null,0,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["swipe left for more news"]))],(function(l,n){l(n,37,0,"dark"),l(n,39,0,"chevron-back")}),(function(l,n){l(n,4,0,e.wb(1,"",n.context.$implicit.urlToImage,"")),l(n,9,0,n.context.$implicit.title),l(n,14,0,n.context.$implicit.description),l(n,19,0,n.context.$implicit.content),l(n,22,0,e.wb(1,"",n.context.$implicit.url,""),e.Eb(n,23).disabled?-1:e.Eb(n,23).tabIndex||0,e.Eb(n,23).disabled||null,e.Eb(n,23).disabled.toString(),"NoopAnimations"===e.Eb(n,23)._animationMode),l(n,31,0,n.context.$implicit.source.name),l(n,35,0,n.context.$implicit.publishedAt)}))}function A(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,16,"ion-header",[],null,null,null,s.L,s.k)),e.rb(1,49152,null,0,r.y,[e.h,e.k,e.y],null,null),(l()(),e.sb(2,0,null,0,14,"ion-toolbar",[["color","warning"]],null,null,null,s.bb,s.A)),e.rb(3,49152,null,0,r.wb,[e.h,e.k,e.y],{color:[0,"color"]},null),(l()(),e.sb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.D,s.c)),e.rb(5,49152,null,0,r.i,[e.h,e.k,e.y],null,null),(l()(),e.sb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.R,s.r)),e.rb(7,49152,null,0,r.O,[e.h,e.k,e.y],null,null),(l()(),e.sb(8,0,null,0,2,"ion-title",[["style","text-align: center;"]],null,null,null,s.ab,s.z)),e.rb(9,49152,null,0,r.ub,[e.h,e.k,e.y],null,null),(l()(),e.Kb(-1,0,["Health"])),(l()(),e.sb(11,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.D,s.c)),e.rb(12,49152,null,0,r.i,[e.h,e.k,e.y],null,null),(l()(),e.sb(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openDiscover()&&e),e}),s.C,s.b)),e.rb(14,49152,null,0,r.h,[e.h,e.k,e.y],null,null),(l()(),e.sb(15,0,null,0,1,"ion-icon",[["name","ellipsis-horizontal-outline"]],null,null,null,s.M,s.l)),e.rb(16,49152,null,0,r.z,[e.h,e.k,e.y],{name:[0,"name"]},null),(l()(),e.sb(17,0,null,null,9,"ion-content",[],null,null,null,s.J,s.i)),e.rb(18,49152,null,0,r.r,[e.h,e.k,e.y],null,null),(l()(),e.sb(19,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,t){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.doRefresh(t)&&e),e}),s.V,s.t)),e.rb(20,49152,null,0,r.X,[e.h,e.k,e.y],null,null),(l()(),e.sb(21,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,s.U,s.u)),e.rb(22,49152,null,0,r.Y,[e.h,e.k,e.y],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),e.sb(23,0,null,0,3,"ion-slides",[],null,null,null,s.Y,s.x)),e.rb(24,49152,null,0,r.lb,[e.h,e.k,e.y],null,null),(l()(),e.hb(16777216,null,0,1,null,w)),e.rb(26,278528,null,0,p.j,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,3,0,"warning"),l(n,16,0,"ellipsis-horizontal-outline"),l(n,22,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,26,0,t.mHealth)}),null)}function f(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"app-health",[],null,null,null,A,C)),e.rb(1,114688,null,0,d,[y.a,r.Ab],null,null)],(function(l,n){l(n,1,0)}),null)}var v=e.ob("app-health",d,f,{},{},[]),m=t("yWMr"),K=t("NcP4"),k=t("t68o"),x=t("zbXB"),N=t("s7LF"),q=t("IheW"),I=t("POq0"),E=t("QQfA"),H=t("IP0z"),M=t("JjoW"),S=t("Mz6y"),O=t("cUpR"),T=t("Xd0L"),z=t("OIZN"),R=t("7kcP"),j=t("s6ns"),P=t("821u"),D=t("/HVE"),F=t("gavF"),J=t("qJ5m"),V=t("iInd");class X{}var $=t("zMNK"),L=t("rWV4"),W=t("hOhj"),B=t("lwm9"),Q=t("r0V8"),_=t("HsOI"),G=t("zQui"),Y=t("8rEH"),Z=t("Gi4r"),U=t("oapL"),ll=t("ZwOa"),nl=t("igqZ"),tl=t("BV1i"),el=t("qJ50"),il=t("MfpL");t.d(n,"HealthPageModuleNgFactory",(function(){return ul}));var ul=e.pb(i,[],(function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[u.a,v,m.a,K.a,k.a,x.b,x.a]],[3,e.j],e.w]),e.Cb(4608,p.m,p.l,[e.t,[2,p.y]]),e.Cb(4608,N.l,N.l,[]),e.Cb(4608,r.a,r.a,[e.y,e.g]),e.Cb(4608,r.Ab,r.Ab,[r.a,e.j,e.q]),e.Cb(4608,r.Db,r.Db,[r.a,e.j,e.q]),e.Cb(4608,q.h,q.n,[p.d,e.A,q.l]),e.Cb(4608,q.o,q.o,[q.h,q.m]),e.Cb(5120,q.a,(function(l){return[l]}),[q.o]),e.Cb(4608,q.k,q.k,[]),e.Cb(6144,q.i,null,[q.k]),e.Cb(4608,q.g,q.g,[q.i]),e.Cb(6144,q.b,null,[q.g]),e.Cb(4608,q.f,q.j,[q.b,e.q]),e.Cb(4608,q.c,q.c,[q.f]),e.Cb(4608,I.c,I.c,[]),e.Cb(4608,E.c,E.c,[E.i,E.e,e.j,E.h,E.f,e.q,e.y,p.d,H.b,[2,p.g]]),e.Cb(5120,E.j,E.k,[E.c]),e.Cb(5120,M.a,M.b,[E.c]),e.Cb(5120,S.a,S.b,[E.c]),e.Cb(4608,O.e,T.e,[[2,T.i],[2,T.n]]),e.Cb(5120,z.b,z.a,[[3,z.b]]),e.Cb(5120,R.b,R.a,[[3,R.b]]),e.Cb(5120,j.b,j.c,[E.c]),e.Cb(135680,j.d,j.d,[E.c,e.q,[2,p.g],[2,j.a],j.b,[3,j.d],E.e]),e.Cb(4608,P.h,P.h,[]),e.Cb(5120,P.a,P.b,[E.c]),e.Cb(4608,T.c,T.x,[[2,T.h],D.a]),e.Cb(4608,T.d,T.d,[]),e.Cb(5120,F.a,F.d,[E.c]),e.Cb(5120,J.b,J.a,[[3,J.b]]),e.Cb(4608,y.a,y.a,[q.c]),e.Cb(1073742336,p.c,p.c,[]),e.Cb(1073742336,N.k,N.k,[]),e.Cb(1073742336,N.c,N.c,[]),e.Cb(1073742336,r.yb,r.yb,[]),e.Cb(1073742336,V.o,V.o,[[2,V.t],[2,V.m]]),e.Cb(1073742336,X,X,[]),e.Cb(1073742336,q.e,q.e,[]),e.Cb(1073742336,q.d,q.d,[]),e.Cb(1073742336,H.a,H.a,[]),e.Cb(1073742336,T.n,T.n,[[2,T.f],[2,O.f]]),e.Cb(1073742336,$.g,$.g,[]),e.Cb(1073742336,D.b,D.b,[]),e.Cb(1073742336,T.w,T.w,[]),e.Cb(1073742336,I.d,I.d,[]),e.Cb(1073742336,b.a,b.a,[]),e.Cb(1073742336,L.a,L.a,[]),e.Cb(1073742336,W.c,W.c,[]),e.Cb(1073742336,E.g,E.g,[]),e.Cb(1073742336,B.c,B.c,[]),e.Cb(1073742336,Q.b,Q.b,[]),e.Cb(1073742336,Q.a,Q.a,[]),e.Cb(1073742336,a.c,a.c,[]),e.Cb(1073742336,T.u,T.u,[]),e.Cb(1073742336,T.s,T.s,[]),e.Cb(1073742336,_.d,_.d,[]),e.Cb(1073742336,M.d,M.d,[]),e.Cb(1073742336,S.c,S.c,[]),e.Cb(1073742336,z.c,z.c,[]),e.Cb(1073742336,R.c,R.c,[]),e.Cb(1073742336,G.o,G.o,[]),e.Cb(1073742336,Y.a,Y.a,[]),e.Cb(1073742336,Z.a,Z.a,[]),e.Cb(1073742336,j.g,j.g,[]),e.Cb(1073742336,P.i,P.i,[]),e.Cb(1073742336,T.y,T.y,[]),e.Cb(1073742336,T.p,T.p,[]),e.Cb(1073742336,U.b,U.b,[]),e.Cb(1073742336,ll.a,ll.a,[]),e.Cb(1073742336,nl.a,nl.a,[]),e.Cb(1073742336,tl.a,tl.a,[]),e.Cb(1073742336,F.c,F.c,[]),e.Cb(1073742336,F.b,F.b,[]),e.Cb(1073742336,el.e,el.e,[]),e.Cb(1073742336,J.c,J.c,[]),e.Cb(1073742336,il.a,il.a,[]),e.Cb(1073742336,i,i,[]),e.Cb(1024,V.k,(function(){return[[{path:"",component:d}]]}),[]),e.Cb(256,q.l,"XSRF-TOKEN",[]),e.Cb(256,q.m,"X-XSRF-TOKEN",[]),e.Cb(256,T.g,T.k,[])])}))},R7Hv:function(l,n,t){"use strict";t.d(n,"a",(function(){return u}));var e=t("8Y7J"),i=t("IheW");let u=(()=>{class l{constructor(l){this.http=l,this.apiKey="75a5c6959e6c457fbbdd536c4d4f9502",this.healthApi="http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=",this.businessApi="http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=",this.entertainmentApi="http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=",this.scienceApi="http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=",this.sportsApi="http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=",this.technologyApi="http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=",this.TopHeadlinesApi="http://newsapi.org/v2/top-headlines?country=in&apiKey=",this.initSourcesApi="http://newsapi.org/v2/sources?language=en&apiKey=",this.initArticlesApi="http://newsapi.org/v2/top-headlines?language=en&apiKey=",this.getArtclesApi="http://newsapi.org/v2/top-headlines?sources=",this.getEverythingApi="http://newsapi.org/v2/everything?q=&apiKey=",this.indiaApi="http://newsapi.org/v2/everything?q=india&apiKey=",this.politicsApi="http://newsapi.org/v2/everything?q=politics&apiKey=",this.automobilesApi="http://newsapi.org/v2/everything?q=automobiles&apiKey=",this.fashionApi="http://newsapi.org/v2/everything?q=fashion&apiKey=",this.travelApi="http://newsapi.org/v2/everything?q=travel&apiKey=",this.CAAAPI="http://newsapi.org/v2/everything?q=CAA&apiKey=",this.startupsApi="http://newsapi.org/v2/everything?q=startups&apiKey="}getHealthNews(){return this.http.get(this.healthApi+this.apiKey)}getBusinessNews(){return this.http.get(this.businessApi+this.apiKey)}getEntertainmentNews(){return this.http.get(this.entertainmentApi+this.apiKey)}getScienceNews(){return this.http.get(this.scienceApi+this.apiKey)}getSportsNews(){return this.http.get(this.sportsApi+this.apiKey)}getTechnologyNews(){return this.http.get(this.technologyApi+this.apiKey)}getTopHeadlinesNews(){return this.http.get(this.TopHeadlinesApi+this.apiKey)}initArticles(){return this.http.get(this.initArticlesApi+this.apiKey)}initSources(){return this.http.get(this.initSourcesApi+this.apiKey)}getArticleByID(l){return this.http.get(this.getArtclesApi+l+"&apiKey="+this.apiKey)}getNews(l){return this.http.get("http://newsapi.org/v2/everything?q="+l+"&apiKey="+this.apiKey)}getIndiaNews(){return this.http.get(this.indiaApi+this.apiKey)}getPoliticsNews(){return this.http.get(this.politicsApi+this.apiKey)}getAutomobliesNews(){return this.http.get(this.automobilesApi+this.apiKey)}getFashionNews(){return this.http.get(this.fashionApi+this.apiKey)}getTravelNews(){return this.http.get(this.travelApi+this.apiKey)}getCAANews(){return this.http.get(this.CAAAPI+this.apiKey)}getStartupsNews(){return this.http.get(this.startupsApi+this.apiKey)}}return l.ngInjectableDef=e.Qb({factory:function(){return new l(e.Rb(i.c))},token:l,providedIn:"root"}),l})()}}]);