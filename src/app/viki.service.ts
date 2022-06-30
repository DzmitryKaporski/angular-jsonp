import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { data } from './shared/data';

const url = "https://ru.wikipedia.org/w/api.php"

@Injectable({
  providedIn: 'root'
})
export class VikiService {

  constructor(private http: HttpClient) {
  }

  searchViki(text: string): Observable<data[]> {

    const params: HttpParams = new HttpParams()
      .set('action', 'opensearch')
      .set('format', 'json')
      .set('search', text)

    return this.http.jsonp(`${url}?${params.toString()}`, 'callback').pipe(
      map((res: any) => {
        const length: number = res[1].length;
        const result: data[] = [];
        for (let i = 0; i < length; i++) {
          result.push({
            name: res[1][i],
            description: res[2][i],
            link: res[3][i],
          })
        }
        return result;
      })
    )
  }
}
