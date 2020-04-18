import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


interface BlogData {
  title: string;
  description: string;
  author: string;
}

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.css']
})
export class BlogModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BlogModalComponent>, 
  @Inject(MAT_DIALOG_DATA) public data: BlogData) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
