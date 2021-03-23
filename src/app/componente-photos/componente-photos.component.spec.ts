import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePhotosComponent } from './componente-photos.component';

describe('ComponentePhotosComponent', () => {
  let component: ComponentePhotosComponent;
  let fixture: ComponentFixture<ComponentePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
