import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  isLoginError =new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  usersignUp(data: signUp) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.log(result)
       if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigateByUrl('seller-home');
       }
      });
   
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLogedIn.next(true);
      this.router.navigateByUrl('seller-home');
    }
  }

  userLogin(data:login){
    console.warn(data);
    //api call code will be there
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body && result.body.length){
          console.log("user logged In successfully")
          this.isLoginError.emit(false)
          localStorage.setItem('seller',JSON.stringify(result.body))
          this.router.navigateByUrl('seller-home')
      }
      else{
        console.log("login faild")
        this.isLoginError.emit(true)
      }
    })

  }
}
