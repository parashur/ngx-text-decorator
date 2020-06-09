import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTextDecorationComponent } from './ngx-text-decoration.component';

describe('NgxTextDecorationComponent', () => {
  let component: NgxTextDecorationComponent;
  let fixture: ComponentFixture<NgxTextDecorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTextDecorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTextDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
