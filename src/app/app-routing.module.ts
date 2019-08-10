import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: CollectionsComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'collection', component: CollectionsComponent, canActivate:[AuthGuard]},
  { path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'collection/:collectionId', component: NotesComponent, canActivate:[AuthGuard]},
]


@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
