import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEventComponent } from './cadastro-event.component';

describe('CadastroEventComponent', () => {
  let component: CadastroEventComponent;
  let fixture: ComponentFixture<CadastroEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
