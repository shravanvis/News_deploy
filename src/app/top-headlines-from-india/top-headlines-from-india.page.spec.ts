import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopHeadlinesFromIndiaPage } from './top-headlines-from-india.page';

describe('TopHeadlinesFromIndiaPage', () => {
  let component: TopHeadlinesFromIndiaPage;
  let fixture: ComponentFixture<TopHeadlinesFromIndiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeadlinesFromIndiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopHeadlinesFromIndiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
