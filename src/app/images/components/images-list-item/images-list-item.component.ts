import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {GliphyImage} from "../../models/models";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-images-list-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './images-list-item.component.html',
  styleUrl: './images-list-item.component.scss'
})
export class ImagesListItemComponent {
  @Input() image!: GliphyImage;

  public loaded = false;

  doLoad() {
    this.loaded = true;
  }




}
