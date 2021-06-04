import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 prods:any
 product=[]
  constructor(public productService:ProductsService,public route:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  } 


  show(){
    this.route.navigateByUrl('/add')
  }
  getAllProducts(){
    this.productService.getProducts().subscribe(
      (list)=>{
        this.prods=list
        console.log(list)
      }
    )
  }
  delete(product:any){
    this.productService.deleteProduct(product.id).subscribe(response=>{
      //update list after delete is successful
      this.getAllProducts();
    })
  }

}
