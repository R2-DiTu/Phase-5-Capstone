import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

    movies:Array<Movies>=[];
    moviesRef= new FormGroup({

    mid:new FormControl(),
    mname:new FormControl(),
    language:new FormControl(),
    price:new FormControl(),
    qty:new FormControl()
  });
  msg:string="";
  buttonMsg:string="Add Movie";
  
 //result:string ="";
  //movies:Array<Movies>=[];
  
  constructor(public ms:MoviesService){ }
  
  ngOnInit(): void {
     this.retrieveMoviesInfo();
  }
retrieveMoviesInfo() : void {
  this.ms.loadAllMoviesInfo().subscribe({
    next:(result:any)=> {
           this.movies=result;
    },
    error:(error:any)=> {
        console.log(error)
    },
    complete:()=> {
        console.log("movie details loaded")
    }
  })
}

/*
  addMovies(): void {
    let movies = this.moviesRef.value;
    this.ms.storeMovies(movies).subscribe({
      next:(result)=> {
        this.result=result;
      },
      error:(error)=> {
        console.log(error)
        this.result=error.message
      },
      complete:()=> {
        console.log("Movie stored!")
        this.retrieveMoviesInfo();
      }
    })

    this.moviesRef.reset();
  }*/
/*
addMovies():void {
  let movies = this.moviesRef.value;
  if(this.buttonMsg=="Add Movie"){
  this.ms.storeMovies(Movies).subscribe({
    next:(result:any)=> {
            this.msg=result;
      },
    error:(error:any)=> {
      console.log(error)
    },
    complete:()=>{
      console.log("Store done!")
      this.retrieveMoviesInfo();
    }*/
  addMovies(): void {
    let movies = this.moviesRef.value;
    if(this.buttonMsg=="Add Movie"){
    this.ms.storeMovies(movies).subscribe({
      next:(result)=> {
            this.msg=result;
        },
      error:(error)=> {
        console.log(error)
     //    this.result=error.message
          },
          complete:()=> {
            console.log("Movie stored!")
            this.retrieveMoviesInfo();
          }
  })
}else {
    this.ms.updateMovies(Movies).subscribe({
      next:(result:any)=> {
        this.msg=result
      },
      error:(error:any)=> {
        console.log(error)
      },
      complete:()=> {
        console.log("update done!")
        this.retrieveMoviesInfo();
        this.buttonMsg="Add Movie"
      }
    })
  
}
this.moviesRef.reset();
}

deleteMovies(mid:number):void{
  console.log("Delete event fired"+mid)
  this.ms.deleteMovies(mid).subscribe({
    next:(result:any)=> {
        this.msg=result;
    },
    error:(error:any)=> {
      console.log(error)
    },
    complete:()=> {
      this.retrieveMoviesInfo();
    }
  })
}

updateMovies(movies:any): void {
  console.log(movies)
  this.buttonMsg="Update Movies";
  this.moviesRef.get("mid")?.setValue(movies.mid);
  this.moviesRef.get("mname")?.setValue(movies.mname);
  this.moviesRef.get("language")?.setValue(movies.language);
  this.moviesRef.get("price")?.setValue(movies.price);
  this.moviesRef.get("qty")?.setValue(movies.qty);
}

}
/*
  addMovies(): void {
    let movies = this.moviesRef.value;

    this.ms.storeMovies(movies).subscribe({
      next:(result)=> {
        this.result=result;
      },
      error:(error)=> {
        console.log(error)
        this.result=error.message
      },
      complete:()=> {
        this.retrieveMoviesInfo();
      }
    })

    this.moviesRef.reset();
  }*/
