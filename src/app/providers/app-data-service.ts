import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { CraftItems } from '../components/crafting/craft'

@Injectable()
export class AppDataServiceProvider {

  constructor(public http: HttpClient) {
  }

  getCraftItems(): Observable<CraftItems[]> {
    return this.http.get<CraftItems[]>('https://mcraftguide.com/api/crafting')
      .pipe();
  }

  getBlogs(): Observable<[]> {
    return this.http.get<[]>('https://mcraftguide.com/api/blog')
      .pipe();
  }

  postBlog(title, author, description) {

    let blog = {};
    blog['title'] = title;
    blog['author'] = author;
    blog['description'] = description;
    blog['comments'] = [];
    
    this.http.post('https://mcraftguide.com/api/blog', blog).subscribe(res => {
      console.log(res);
    });;

  }

  postComment(data, blogId) {

    let comment = {};
    comment['description'] = data.comment;
    comment['author'] = data.author;
    
    let url = 'https://mcraftguide.com/api/blog/'+blogId+'/comments';
    this.http.post(url, comment).subscribe(res => {
      console.log(res);
    });;

  }

}

