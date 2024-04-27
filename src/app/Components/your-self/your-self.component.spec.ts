import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSelfComponent } from './your-self.component';

describe('YourSelfComponent', () => {
  let component: YourSelfComponent;
  let fixture: ComponentFixture<YourSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourSelfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
