import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {GliphyData, GliphyImage, GliphyResponse} from "./models/models";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private readonly gliphyApiKey = environment.gliphyApiKey;

  constructor(private readonly http: HttpClient) { }

  getTrendingImages(limit: number, offset: number): Observable<GliphyImage[]> {
    // necesito obtener las imagenes de tendencia de gliphy
    return this.http.get<GliphyResponse>(`https://api.giphy.com/v1/gifs/trending?api_key=${this.gliphyApiKey}&limit=${limit}&offset=${offset}`)
      .pipe(
        map((response: GliphyResponse) => {
          return response.data.map((image: GliphyData) => {
            return {
              id: image.id,
              title: image.title,
              url: image.images.downsized.url,
              width: image.images.downsized.width,
              height: image.images.downsized.height
            }
          })
        })
      )
  }
}
