import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUsuarioPage } from './create-usuario.page';

describe('CreateUsuarioPage', () => {
  let component: CreateUsuarioPage;
  let fixture: ComponentFixture<CreateUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
