import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProdutosPage } from './home-produtos.page';

describe('HomeProdutosPage', () => {
  let component: HomeProdutosPage;
  let fixture: ComponentFixture<HomeProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
