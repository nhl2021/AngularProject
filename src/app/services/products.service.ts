import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  base_path='http://localhost:8000/api/products/'

  constructor(public http:HttpClient) { }
  
  //Create a new item 
  createProduct(item:any):Observable<Product>{

    return this.http
    .post<Product>('http://localhost:8000/api/products/add',item)
  } 


  //Get product data  
  getProducts():Observable<Product>{

    return this.http
    .get<Product>(this.base_path)
  }  


  //Get single prodct data by ID  
  getProduct(id:any):Observable<Product>{

    return this.http
    .get<Product>('http://localhost:8000/api/products/view/' +id)
  }   


  //Update item by id 
  updateProduct(id:number,item:any): Observable<Product>{
    return this.http.put<Product>('http://localhost:8000/api/product/update/' +id,item)
   
  } 
  //Delete item by id 
  deleteProduct(id:any){
    return this.http.delete<Product>('http://localhost:8000/api/product/delete/' +id)
  }
}
