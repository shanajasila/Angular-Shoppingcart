import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-products',
  templateUrl: './viewall-products.component.html',
  styleUrls: ['./viewall-products.component.css']
})
export class ViewallProductsComponent {
  constructor(private api:ApiService){
    api.fetchcart().subscribe(
      (response)=>{
        this.product=response
      }
    )
  }
product:any=[]

}
