import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from 'src/app/core/service/home/home.service';
import { Publication, } from 'src/app/models/item';
import { Observable, forkJoin, map, switchMap } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  publication$!: Observable<Publication[]>;
  // img$!: Observable<img[]>;
  loading: boolean = true;
  // //imgView: [];
  //img$!: [];


  constructor(private http: HttpClient, private HomeService: HomeService) { }

    ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this.HomeService.getPubli().pipe(
    switchMap((res1: Publication[]) => {
      const Observables = res1.map (pub =>
        this.HomeService.getImg(pub.img).pipe(
          map(res2 => ({...pub, img: res2}))
        )
      );

      return forkJoin(Observables)
    })
    ).subscribe(res => {
      console.log(res),
      () => this.loading = false
    });
  }
}

