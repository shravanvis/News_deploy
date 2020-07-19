import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSourcesPage } from './news-sources.page';

describe('NewsSourcesPage', () => {
  let component: NewsSourcesPage;
  let fixture: ComponentFixture<NewsSourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
