import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }


  // admin login
  adminLogin(usercredobj):Observable<any>{
    return this.hc.post("/admin/login",usercredobj)
   }


  //  admin added product
   addNewProduct(formData):Observable<any>{
    return this.hc.post("/admin/addproduct",formData)
  }

  // getproducts
  getProducts():Observable<any>{
    return this.hc.get("/admin/products")
  }


}
