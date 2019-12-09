import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListServicosPage } from './list-servicos.page';

describe('ListServicosPage', () => {
  let component: ListServicosPage;
  let fixture: ComponentFixture<ListServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
