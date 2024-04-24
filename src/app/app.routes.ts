import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'card-editor',
        loadComponent: () => import('./card/card-editor/card-editor.component').then((c)=> c.CardEditorComponent)
    },
    {
        path: 'section-editor',
        loadComponent: () => import('./sections/sections-editor/sections-editor.component').then((c)=> c.SectionsEditorComponent)
    },
];
