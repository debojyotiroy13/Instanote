import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css','../app.component.css']
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private firebaseService: FirebaseService) { 
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['userId']);
      // this.firebaseService.getCollectionMap(params['collectionId']).subscribe((res:any)=>{
      //   console.log(res);
      // });
    })
  }

  ngOnInit() {
  }

}
