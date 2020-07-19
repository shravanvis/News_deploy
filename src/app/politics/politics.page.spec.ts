import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticsPage } from './politics.page';

describe('PoliticsPage', () => {
  let component: PoliticsPage;
  let fixture: ComponentFixture<PoliticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
