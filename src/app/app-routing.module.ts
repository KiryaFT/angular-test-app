import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NoteListComponent} from './note-list/note-list.component';
import {NoteCreatorComponent} from './note-creator/note-creator.component';
import {NoteDetailsComponent} from './note-details/note-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'blog', component: NoteListComponent},
  {path: 'note-creator', component: NoteCreatorComponent},
  {path: 'blog/:noteId', component: NoteDetailsComponent},
  {path: '', redirectTo: '/blog', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
