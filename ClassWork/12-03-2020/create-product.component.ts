import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{
  productFormGroup;
  constructor() { }

  ngOnInit(){
  
  this.productFormGroup=new FormGroup(
    {
      title: new FormControl('',Validators.required),
      img: new FormControl('',Validators.required),
      des: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)
    }
  )
  }
  submitData()
  {
    console.log(this.productFormGroup.value)
  }
}
