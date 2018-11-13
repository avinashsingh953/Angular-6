import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menuUrl = 'http://localhost:3000/api/menu';
  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<any>(this._menuUrl);
  }
}
