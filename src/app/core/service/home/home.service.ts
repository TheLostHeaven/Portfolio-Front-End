import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication} from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeService {


  constructor(private http: HttpClient) { }

  public getPubli(): Observable<Publication[]> {
    const url = `${environment.apiUrl}/publications/`
    return this.http.get<Publication[]>(url);
  }

    getImg(img: string): Observable<Publication[]>{
    const url = `${environment.apiUrl}/img/${img}`;
    return this.http.get<Publication[]>(url);
  }
}

