import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {

  navigation = [{
    'id': '1',
    'name': 'Crafting',
    'image': 'crafting.jpeg',
    'router': 'crafting'
  },{
    'id': '2',
    'name': 'Blog Post',
    'image': 'blog.jpeg',
    'router': 'blog'
  },{
    'id': '3',
    'name': 'Coming Soon',
    'image': 'comingSoon.jpeg',
    'router': 'http://google.com'
  }];  

}
