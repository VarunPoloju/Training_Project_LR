import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { ProductlistComponent } from '../admin/productlist/productlist.component';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  product :Product;
  constructor(private acr:ActivatedRoute,private router:Router,private adminservice:AdminService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.acr.paramMap.subscribe(data=>{
     
      this.adminservice.getProductById(data["params"].productid).subscribe(
        res=>{
            this.product=res["product"]
        },
        err=>{
          // alert("Error in reading product")
          this.toaster.error("Error in reading product")
          console.log(err)
        }
      )
    })
  }

}


interface Product{
  productid:number;
  productname:string;
  productdescription:string;
  productimage:string;
  productprice:number;
}
