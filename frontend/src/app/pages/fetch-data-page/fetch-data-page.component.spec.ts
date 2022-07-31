import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataPageComponent } from './fetch-data-page.component';

describe('FetchDataPageComponent', () => {
  let component: FetchDataPageComponent;
  let fixture: ComponentFixture<FetchDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
