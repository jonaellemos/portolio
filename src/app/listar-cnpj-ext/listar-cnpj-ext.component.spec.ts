import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCnpjExtComponent } from './listar-cnpj-ext.component';

describe('ListarCnpjExtComponent', () => {
  let component: ListarCnpjExtComponent;
  let fixture: ComponentFixture<ListarCnpjExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCnpjExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCnpjExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
