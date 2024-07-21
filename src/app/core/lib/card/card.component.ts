import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent {
  @Input() publication!: Publication;
  }

