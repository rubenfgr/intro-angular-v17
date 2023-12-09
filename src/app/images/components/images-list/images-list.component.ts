import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesService} from "../../images.service";
import {ImagesListItemComponent} from "../images-list-item/images-list-item.component";
import {GliphyImage} from "../../models/models";

@Component({
  selector: 'app-images-list',
  standalone: true,
  imports: [CommonModule, ImagesListItemComponent],
  templateUrl: './images-list.component.html',
  styleUrl: './images-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesListComponent implements OnInit {

  public images = signal<GliphyImage[]>([]);

  constructor(private readonly imagesService: ImagesService) {
  }

  ngOnInit() {
    this.imagesService.getTrendingImages(25, 0)
      .subscribe((images) => {
        this.images.set(images);
      });
  }
}
