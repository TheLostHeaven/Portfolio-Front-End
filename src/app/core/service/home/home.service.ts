import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication} from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl
  }

  public getPublication(endpoint: string): Observable<Publication[]> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get<Publication[]>(url);
  }

  public getPubli(): Observable<Publication[]>{
    const url = `${this.baseUrl}/publications/`
    return this.http.get<Publication[]>(url);
  }

    getImg(img: string): Observable<Publication[]>{
    const url = `${this.baseUrl}/img/${img}`;
    return this.http.get<Publication[]>(url);
  }
}

