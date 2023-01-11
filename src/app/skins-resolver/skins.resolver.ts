import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {SkinsService} from "../skins-service/skins.service";
import {Skin} from "../entity/skin";

@Injectable({
  providedIn: 'root'
})
export class SkinsResolver implements Resolve<Skin[]> {

  constructor(private skinsService:SkinsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skin[]> {
    return this.skinsService.getAllSkins();
  }
}
