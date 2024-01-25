import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Publication,  } from 'src/app/models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent {
  @Input() publication!: Publication;
  imgSrc: SafeUrl = this.sanitizer.bypassSecurityTrustUrl('');

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    let objectURL = this.publication.img
    this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}

