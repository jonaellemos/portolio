import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaVirtualComponent } from './agenda-virtual.component';

describe('AgendaVirtualComponent', () => {
  let component: AgendaVirtualComponent;
  let fixture: ComponentFixture<AgendaVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
