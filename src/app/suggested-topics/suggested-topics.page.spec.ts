import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuggestedTopicsPage } from './suggested-topics.page';

describe('SuggestedTopicsPage', () => {
  let component: SuggestedTopicsPage;
  let fixture: ComponentFixture<SuggestedTopicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedTopicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestedTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
