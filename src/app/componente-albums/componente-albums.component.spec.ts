import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAlbumsComponent } from './componente-albums.component';

describe('ComponenteAlbumsComponent', () => {
  let component: ComponenteAlbumsComponent;
  let fixture: ComponentFixture<ComponenteAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
