import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddServicoPage } from './add-servico.page';

describe('AddServicosPage', () => {
  let component: AddServicoPage;
  let fixture: ComponentFixture<AddServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
