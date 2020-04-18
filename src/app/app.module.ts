import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AppDataServiceProvider } from './providers/app-data-service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogComponent } from './components/blog/blog.component';
import { CraftingComponent } from './components/crafting/crafting.component';
import { BlogModalComponent } from './modals/blog-modal/blog-modal.component';
import { CommentModalComponent } from './modals/comment-modal/comment-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CraftingComponent,
    BlogModalComponent,
    CommentModalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [AppDataServiceProvider],
  bootstrap: [AppComponent],
  entryComponents: [BlogModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 

  constructor(router: Router) {}

}
