import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CollectionsComponent } from './collections/collections.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'; 
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    NotesComponent,
    DialogComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
     
  ],
  providers: [FirebaseService,CookieService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
