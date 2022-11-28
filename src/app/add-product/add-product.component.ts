import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  title=""
  price=""
  description=""
  SellerName=""
  image=""
  Quantity=""
  add=()=>{
    let data={"title":this.title,"price":this.price,"description":this.description,"SellerName":this.SellerName,"image":this.image,"Quantity":this.Quantity}
    console.log(data)
  }

}
