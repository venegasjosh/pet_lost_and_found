import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { AllComponent } from './products/all/all.component';
import { HomeComponent } from './products/home/home.component';
import { CommentComponent } from './products/comment/comment.component';
import { ShowoneComponent } from './products/showone/showone.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent, children: [
    {path: "home", component: HomeComponent},
    {path: "all", component: AllComponent},
    {path: "create", component: CreateComponent},
    {path: "edit/:id", component: EditComponent},
    {path: "showone/:id", component: ShowoneComponent},
    {path: ":id/comment", component: CommentComponent}
  ]},
  {path: "", pathMatch: "full", redirectTo: "/products/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }