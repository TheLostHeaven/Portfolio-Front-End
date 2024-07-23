import { Component, OnInit} from '@angular/core';
import { Publication } from 'src/app/models/item';
import { HomeService } from 'src/app/core/service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {

  posts: Publication[] = []

  constructor (private service: HomeService) {}

  ngOnInit(): void {
    this.service.getPubli().subscribe(
      data => {this.posts = data},
      error => {console.error('error', error)}
    );
  }
}

