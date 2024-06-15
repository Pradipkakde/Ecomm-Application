import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string='default';
sellerName:string='';
searchResult:undefined|product[];
  constructor(private route:Router,private product:ProductService){ }
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        console.warn(val.url)
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
            console.warn("inside seller Area")
            this.menuType="seller"
            if(localStorage.getItem('seller')){
              let sellerStore=localStorage.getItem('seller');
              let sellerData=sellerStore && JSON.parse(sellerStore)[0];
              this.sellerName=sellerData.name;
            }
        }
        else{
          console.log('Outside Seller Area')
          this.menuType='default'
        }
      }
      
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  serachProduct(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
    this.product.searchProduct(element.value).subscribe((result)=>{
 
      if(result.length>5)
        {
          result.length>5;
        }
      this.searchResult=result;

    })
    }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  submitSearch(val:string){
  this.route.navigate([`search/${val}`]);

  }

}
