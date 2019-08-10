import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private cookieService: CookieService) { 
    this.user = firebaseAuth.authState;
    // console.log(this.user);
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        // console.log('Success!', value);
      })
      .catch(err => {
        // console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password).then((res:any)=>{
        this.cookieService.set('instanote-token', res );
        // console.log(this.cookieService.get('instanote-token'));
      });
  }

  isValid(){
    return this.cookieService.check('instanote-token');
  }

  logout() {
    this.firebaseAuth.auth.signOut().then(()=>{
      this.cookieService.delete('instanote-token');
    });

  }
}
