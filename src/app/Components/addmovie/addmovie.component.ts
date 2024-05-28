
import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../../Services/movieservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../../Model/Movies';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.css'
})

export class AddmovieComponent implements OnInit {
  NewMovies: movies={
    id : 0,
    title: '',
    genre: '',
    reelasedate: new Date()
  };
  constructor(private Addmovieservices : MovieserviceService, private router: Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>
        {
          const id= params.get('id');
          console.log(id);
          if (id)

            {
              this.Addmovieservices.getmoviesById(id).subscribe({
                next: (response)=>{
                  this.NewMovies=response;
                },
                error: (Response) =>
                  {
                    console.log(Response);
                  }
              }

              )
            }
        } ,  error: (Response) =>
          {
            console.log(Response);
          }
    })
    

  }
  AddMovies()
  {

    this.Addmovieservices.AddMovies(this.NewMovies.id,this.NewMovies)
    .subscribe({
      next: (newmovies)=>
        {
          this.router.navigate(['movieLink']);
        },
        error: (Response) =>
          {
            console.log(Response);
          }
    })
  }

  }


