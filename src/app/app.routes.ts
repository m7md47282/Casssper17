import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'card-editor',
        loadComponent: () => import('./card/card-editor/card-editor.component').then((c)=> c.CardEditorComponent)
    }
];
