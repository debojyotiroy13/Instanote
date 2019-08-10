import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Collection } from '../entity/collection';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css','../app.component.css']
})
export class NotesComponent implements OnInit {

  collections: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private firebaseService: FirebaseService) { 
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['collectionId']);
      this.firebaseService.getCollectionMap(params['collectionId']).subscribe((res:any)=>{
        this.collections.push(res);
      });

      // .subscribe( (result:any) => {
      //   // console.log(result.payload.data());
      // });
    })
  }

  ngOnInit() {
  }

}
