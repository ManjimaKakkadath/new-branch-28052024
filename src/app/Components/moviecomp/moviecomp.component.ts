import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../../Services/movieservice.service';
import { Router } from '@angular/router';
import { movies } from '../../Model/Movies';

@Component({
  selector: 'app-moviecomp',
  templateUrl: './moviecomp.component.html',
  styleUrl: './moviecomp.component.css'
})

export class MoviecompComponent  implements OnInit {
  varmovie:movies[]=[];
  constructor(private movieservices : MovieserviceService, private router: Router) {}
  ngOnInit(): void {
    this.movieservices.getmovies().subscribe({
      next: (test)=>{
        this.varmovie = test
      },
      error: (Response) =>{ 
        console.log(Response);
      }
      
      
    })
  }

  DeleteMovies(id:number){
    this.movieservices.DeleteMovies(id)  
    .subscribe({
      next: (response)=>
        {
          let currenturl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then
          (()=>{
            this.router.navigate([currenturl]);
          })
        },
        error: (Response) =>{ 
          console.log(Response);
        }
    })
    
  }

  
 
}
