import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogsPageComponent } from './event-logs-page.component';

describe('EventLogsPageComponent', () => {
  let component: EventLogsPageComponent;
  let fixture: ComponentFixture<EventLogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLogsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
