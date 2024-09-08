import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { Orderinfo } from '../orderinfo';
import { OrderinfoService } from '../orderinfo.service';

@Component({
  selector: 'app-customermoviesview',
  templateUrl: './customermoviesview.component.html',
  styleUrls: ['./customermoviesview.component.css']
})
export class CustomermoviesviewComponent implements OnInit{
  payment_flag:boolean = false;
  total:number =0;
  emailid:string="";
  movies:Array<Movies>=[];
  carts:Array<Movies>=[];
  constructor(public moviesService:MoviesService,public orderInfoService:OrderinfoService){  }
flag:boolean = true;
  ngOnInit(): void {

    let obj = sessionStorage.getItem("user");
    if(obj!=null){
        this.emailid=obj;
    }

      this.moviesService.loadAllMoviesInfo().subscribe({
        next:(result:any)=> {
            this.movies=result;
        },
        error:(error:any)=> {

        },
        complete:()=> {

        }
      })
  }

  addToCart(movies:any,index:any): void {
    movies.qty=1;
    let result = this.carts.find(c=>c.mid==movies.mid);
    if(result==undefined){
    this.carts.push(movies);
    this.total=this.total+this.carts[index].price;
    }else {
      alert("Movie already present in cart")
    }
   
  }

  calculateTotalAmount() {
  this.total = this.carts.reduce((previousValue:any,currentValue:any)=> {
      console.log(previousValue+" "+currentValue.price+" "+currentValue.qty)
      return previousValue+currentValue.qty*currentValue.price;
    },0)
  }

  removeItemFromCart(index:any){
    console.log(index)
    this.total=this.total-this.carts[index].price;
    this.carts.splice(index,1);  // 
  }
  viewCart(): void {
    this.flag=false;
  }
  continueShopping(): void {
    this.flag=true;

  }

  incrementQty(index:any){
    //console.log("increment "+index)
    this.carts[index].qty=this.carts[index].qty+1
    this.calculateTotalAmount();
  }
  decrementQty(index:any){
    //console.log("decrement "+index)
    this.carts[index].qty=this.carts[index].qty-1
    this.calculateTotalAmount();
  }
  processedForPayment(): void {
      this.payment_flag=true;
  }
  payment(): void {
  let orderinfo = new Orderinfo(this.emailid,this.carts,this.total);  
  console.log(orderinfo); 
  this.orderInfoService.placeOrder(orderinfo).subscribe({
    next:(result:any)=> {
        console.log(result)
    },
    error:(error:any)=> {
        console.log(error)
    },
    complete:()=> {
        console.log("Order Successful!")
    }
  }) 
  }
}
