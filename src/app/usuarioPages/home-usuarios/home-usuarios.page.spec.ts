import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUsuariosPage } from './home-usuarios.page';

describe('HomeUsuariosPage', () => {
  let component: HomeUsuariosPage;
  let fixture: ComponentFixture<HomeUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
