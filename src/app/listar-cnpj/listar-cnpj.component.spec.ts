import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCnpjComponent } from './listar-cnpj.component';

describe('ListarCnpjComponent', () => {
  let component: ListarCnpjComponent;
  let fixture: ComponentFixture<ListarCnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
