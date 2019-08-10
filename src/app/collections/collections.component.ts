import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FirebaseService } from '../firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { Collection } from '../entity/collection';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css','../app.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: any[] = [];
  // posts: any[] = [
  //   {
  //     collectionId: 1,
  //     image:'https://source.unsplash.com/random/800x600?wedding&sig=' + this.getRandomNumber(), 
  //     user:'debo13',
  //     posts:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //     'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
  //     name:'October',
  //     postText:''
  //   },
  //   {
  //     collectionId: 2,
  //     image:'https://source.unsplash.com/random/800x600?wedding&sig=' + this.getRandomNumber(), 
  //     user:'laxmi21',
  //     posts:[],
  //     name:'September',
  //     postText:''
  //   }];


  constructor(private router:Router, public dialog: MatDialog, private firebaseService: FirebaseService,
    public db: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.getData();
    this.getCollections();
  }

  getCollections(){
    this.firebaseService.getCollections()
    .subscribe((result : any) => {
      this.collections = result;
      // console.log(result);
      // console.log(result[0].payload.doc.id);
      // console.log(result[0].payload.doc.data());
      // collection.payload.doc.data()
    })
  }

  getData(){
    this.firebaseService.getUsers()
    .subscribe((result : any) => {
      // console.log(result[0].payload.doc.data());
    })
  }

  getRandomNumber() {
    return (Math.floor(Math.random()*1000));
  }

  enterPost(event:any){
    this.router.navigate(['collection', event.payload.doc.id]);
  }

  profileClciked(){
    this.router.navigate(['login']);
  }

  logoutClicked(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

  compassClciked(){
    this.router.navigate(['user']);
  }
  addPost(text, collection:any){
    // console.log(text);
    // console.log(collection.payload.doc.id);
    // console.log(collection.payload.doc.data());
    let data = collection.payload.doc.data();
    data.posts.push(text);
    this.firebaseService.updateCollection(collection.payload.doc.id,data).then(res =>{});
    // this.firebaseService.createPosts(collection.payload.doc.id,{body:text}).then();
    this.getCollections();
  }

  deletePost(collection:any){
    this.firebaseService.deletePost(collection.payload.doc.id).then();
    this.getCollections();
  }

  openDialog(): void {
    var dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        collectionId: 1,
        image:'', 
        user:'',
        posts:[],
        name:'',
        postText:'',
        description:''
      }
    });
    // dialogRef.close({ event: 'submit' });
    dialogRef.afterClosed().subscribe(result => {
      result.image = 'https://source.unsplash.com/random/800x400?' + result.description+ '&sig=' + this.getRandomNumber();
      this.firebaseService.createCollection(result);
      this.getCollections();
    });
  }
}


    