import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsEditorComponent } from './sections-editor.component';

describe('SectionsEditorComponent', () => {
  let component: SectionsEditorComponent;
  let fixture: ComponentFixture<SectionsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
