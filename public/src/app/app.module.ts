import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpService } from './http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRadioModule
  
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { AllComponent } from './products/all/all.component';
import { HomeComponent } from './products/home/home.component';
import { CommentComponent } from './products/comment/comment.component';
import { ShowoneComponent } from './products/showone/showone.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateComponent,
    EditComponent,
    AllComponent,
    HomeComponent,
    CommentComponent,
    ShowoneComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRadioModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }