import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutomobilesPage } from './automobiles.page';

describe('AutomobilesPage', () => {
  let component: AutomobilesPage;
  let fixture: ComponentFixture<AutomobilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutomobilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
