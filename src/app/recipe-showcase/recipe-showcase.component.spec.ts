import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShowcaseComponent } from './recipe-showcase.component';

describe('RecipeShowcaseComponent', () => {
  let component: RecipeShowcaseComponent;
  let fixture: ComponentFixture<RecipeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
