import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Observable, retry} from "rxjs";
import {Skin} from "../entity/skin";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkinsService {

  private apiUrl: string;
  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAllSkins() : Observable<Skin[]>
  {
    return this.httpClient.get<Skin[]>(this.apiUrl).pipe(retry(3))
  }

  find(description: string)
  {
    const url = this.apiUrl + '/find?val=' + description

    return this.httpClient.get<Skin[]>(url).pipe(retry(3))
  }
}
