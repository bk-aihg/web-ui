import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { CraftItems } from './craft';
import { AppDataServiceProvider } from '../../providers/app-data-service'

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.css']
})
export class CraftingComponent implements OnInit {
  

  items: CraftItems[];
  errorMessage;
  childItems = [];
  showChild;  

  constructor(public dataService: AppDataServiceProvider) {
  
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems(){

    this.dataService.getCraftItems()
      .subscribe(items => this.items = items);
    
    console.log(this.items)
  }

  toggleChild(child){
    var id = 'parent-'+child.itemId;
    var c = document.getElementById(id)
    var d = c.getElementsByClassName("childNode");
    
    for (var i = 0; i < d.length; i++) {

    }

  } 
}
