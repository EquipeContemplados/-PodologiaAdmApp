import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListAgendaPage } from './list-agenda.page';

describe('ListAgendaPage', () => {
  let component: ListAgendaPage;
  let fixture: ComponentFixture<ListAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAgendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
