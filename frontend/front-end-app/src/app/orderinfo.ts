import { Movies } from "./movies";

export class Orderinfo {
    constructor(public emailid:string,public products:Array<Movies>,public totalamount:number){}
}
