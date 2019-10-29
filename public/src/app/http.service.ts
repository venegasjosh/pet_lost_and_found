import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient
  ) {
  }

  getAllProducts() {
    return this._http.get("/getProducts");
  }

  getOneProduct(id) {
    // console.log("getting one product");
    // console.log(id);
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    return this._http.get(`/${id}`);
  }

  createProduct(newProduct) {
    // console.log("HERE AGAIN *******")
    // console.log(newProduct)
    return this._http.post("/create", newProduct);
  }
// daniel's code
  uploadImage(image: File){
    const formData = new FormData();
    formData.append('image', image)
    this._http.post('/image-upload',formData).subscribe(res => {
        res['data'];
      })
  }

  // public uploadImage(image: File): Observable<string | any> {
  //   const formData = new FormData():

  //   formData.append('image', image);

  //   return this._http.post('/image-upload', formData).map(res => { debugger; return res.json() })
  //     .map(json => { debugger; return json.imageUrl })
  // }

  updateProduct(updatedProduct) {
    return this._http.put(`/${updatedProduct._id}`, updatedProduct);
  }

  deleteProduct(id: string) {
    return this._http.delete(`/${id}/delete`, {});
  }

  createComment(id: string, newComment) {
    // console.log("createComment - service");
    // console.log(newComment.id);
    // console.log(newComment);
    return this._http.post(`/${id}/comment`, newComment);
  }


}