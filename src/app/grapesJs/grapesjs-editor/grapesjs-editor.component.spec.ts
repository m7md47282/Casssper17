import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapesjsEditorComponent } from './grapesjs-editor.component';

describe('GrapesjsEditorComponent', () => {
  let component: GrapesjsEditorComponent;
  let fixture: ComponentFixture<GrapesjsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrapesjsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrapesjsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
