import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public add: FormGroup;
  produits:any

  constructor(public formbuilder: FormBuilder,
              public ProduitsService: ProductsService,
              private route:Router, 
              public http: HttpClient) {
                this.add = formbuilder.group({
                  name:["", Validators.required],
                  marque:["", Validators.required],
                  garantie:["", Validators.required],
                  details: ["", Validators.required],
                  image: [""],
                //fileSource: ['', Validators.required],
                price: [ , Validators.required],
                })
               }

  ngOnInit(): void {
    this.ProduitsService.getProducts().subscribe(
      (list)=>{
        this.produits=list
        console.log(list)
      }
    )
  }

  onadd(){
    const data = this.add.value
    this.ProduitsService.createProduct(data).subscribe(
      (response)=>{
        console.log('yes',response)
        this.route.navigateByUrl('/')
      }
    )
  }
}
