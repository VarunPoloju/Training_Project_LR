import { Component, OnInit } from '@angular/core';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import {SearchPipe} from '../../search.pipe'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products=[];
  productsStatus:boolean=false;
  searchTerm:string;
 
  constructor(private adminservice:AdminService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.adminservice.getProducts().subscribe(
      res=>{
        if(res["message"]=="empty"){
              this.productsStatus=true;
        }
        if(res["message"]=="nonempty"){
          this.products=res["products"]
        }
      },
      err=>{
        // alert("Error on fetcing products..Please try again")
        this.toaster.error("Error on fetcing products..Please try again")
        console.log(err)
      }
    )
  }


  edit(product){
    product.isEdit=true;
  }

  delete(product){
    console.log(product)
    this.adminservice.deleteProduct(product).subscribe(
      res=>{
            if(res["message"]){
            // alert("product removed")
            this.toaster.success("Product Removed Successfully!!")
            }
            // if(res["message"]=="product not found")
            // alert("product not found")
      },
      err=>{
        // alert("something went wrong")
        this.toaster.error("Something went wrong")
            console.log(err)
      }
    )
  }




  save(product){
    product.isEdit=false;
    console.log(product);
    this.adminservice.editProduct(product).subscribe(
      res=>{
             if(res["message"]){
              //  alert("product updated")
               this.toaster.success("Product Updated Successfully!!")
               
               
             }
             
      },
      err=>{
            //  alert("Something went wrong")
             this.toaster.success("Something went wrong")
             console.log(err)
      }
    )
  }



  cancel(product){
    product.isEdit=false;
  }






  

}
