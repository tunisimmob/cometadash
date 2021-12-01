import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevisComponent } from './list-devis.component';

describe('ListDevisComponent', () => {
  let component: ListDevisComponent;
  let fixture: ComponentFixture<ListDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
