import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsCardsComponent } from './fairs-cards.component';

describe('FairsCardsComponent', () => {
  let component: FairsCardsComponent;
  let fixture: ComponentFixture<FairsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
