import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


interface CommentData {
  comment: string;
  author: string;
}

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommentModalComponent>, 
  @Inject(MAT_DIALOG_DATA) public data: CommentData) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
