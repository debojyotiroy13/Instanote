import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore, private http: HttpClient) {}

  getEntities(path){
    return this.db.collection(path).snapshotChanges();
  }
  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }
  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }
  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }
  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }
  searchUsers(searchValue) {
    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }
  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }
  createUser(value) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
    });
  }

  getCollections() {
    return this.db.collection('collections').snapshotChanges();
  }
  getCollection(id) {
    return this.db.collection('collections').doc(id).snapshotChanges();
  }
  getCollectionMap(id) {
    return this.db.collection('collections').doc(id).snapshotChanges();
    // .pipe(
    //   map((data: any) => {
    //     return [data.payload.data()];
    //   }), catchError( error => {
    //     return throwError( 'Something went wrong!' )
    //   })
    //  );
    //map((response: any) => {return response.payload.data().image});
  }
  updateCollection(id, value) {
    return this.db.collection('collections').doc(id).set(value);
  }
  createCollection(value:any) {
    return this.db.collection('collections').add(value);
  }


  getPosts(collectionId,value:any) {
    return this.db.collection('collections/' + collectionId + '/posts').snapshotChanges();;
  }
  createPosts(collectionId,value:any) {
    return this.db.collection('collections/' + collectionId + '/posts').add(value);
  }
  deletePost(id) {
    return this.db.collection('collections').doc(id).delete();
  }
}
