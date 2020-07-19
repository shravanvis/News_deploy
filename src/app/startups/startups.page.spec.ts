import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartupsPage } from './startups.page';

describe('StartupsPage', () => {
  let component: StartupsPage;
  let fixture: ComponentFixture<StartupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
