import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProveedoresComponent } from './list-proveedores.component';

describe('ListProveedoresComponent', () => {
  let component: ListProveedoresComponent;
  let fixture: ComponentFixture<ListProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProveedoresComponent]
    });
    fixture = TestBed.createComponent(ListProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});