import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellingPage } from './selling.page';

describe('SellingPage', () => {
  let component: SellingPage;
  let fixture: ComponentFixture<SellingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
