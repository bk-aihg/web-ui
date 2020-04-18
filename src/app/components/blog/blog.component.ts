import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AppDataServiceProvider } from '../../providers/app-data-service';
import { BlogModalComponent } from '../../modals/blog-modal/blog-modal.component';
import { CommentModalComponent } from '../../modals/comment-modal/comment-modal.component';


interface BlogData {
  title: string;
  authour: string;
  description: string;
}

interface CommentData {
  comment: string;
  author: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blogs: [];
  title: string;
  author: string;
  description: string;
  comment: string;
  
  constructor(public dataService: AppDataServiceProvider, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs(){

    this.dataService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
    
  }


  openBlogDialog(): void {
    const dialogRef = this.dialog.open(BlogModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataService.postBlog(result.title, result.author, result.description);
    });
  }


  openCommentDialog(blogId): void {
    const dialogRef = this.dialog.open(CommentModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(blogId);
      this.dataService.postComment(result, blogId);
    });
  }

}
