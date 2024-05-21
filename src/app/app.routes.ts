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
    {
        path: 'pages-editor',
        loadComponent: () => import('./pages/pages-editor/pages-editor.component').then((c)=> c.PagesEditorComponent)
    },
];
