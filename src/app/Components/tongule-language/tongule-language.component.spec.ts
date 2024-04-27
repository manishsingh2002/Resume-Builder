import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonguleLanguageComponent } from './tongule-language.component';

describe('TonguleLanguageComponent', () => {
  let component: TonguleLanguageComponent;
  let fixture: ComponentFixture<TonguleLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TonguleLanguageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonguleLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
