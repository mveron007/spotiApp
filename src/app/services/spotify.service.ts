import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases:any[]=[];

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC0o9Ek-cmsJskTUFw92Fcp48yYrAczqlXx--HSR25zo0gkBgVHLTwrn12YR3sYvi0G06jYSQdtCAt4MtQ'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe( map( (data:any)=> {
      return data.albums.items;
    } ));
      
  }

  getArtist(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( (data:any) => {
      return data.artists.items;
    } ));
  }
}
