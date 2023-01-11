import { Component, OnInit } from '@angular/core';
import {Skin} from "../entity/skin";
import {SkinsService} from "../skins-service/skins.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('cardsAnims', [
      transition(':enter', [
        style({
          position:'relative',
          bottom:'10px',
          opacity:0
        }),
        animate('400ms', style(
          {
            opacity:1,
            bottom:0
          }
        ))
      ]),
      transition(':leave', [
        style({
          opacity:1
        }),
        animate('300ms', style(
          {
            opacity:0
          }
        ))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  skins: Skin[];

  isSkinsFound:boolean;

  constructor(private route:ActivatedRoute, private skinsService:SkinsService){
  }

  private handleError(error: HttpErrorResponse)
  {
    if(error.status === 404)
    {
      this.isSkinsFound = false;
    }

    return throwError(()=> new Error(error.message))
  }
  ngOnInit(): void {
    this.route.data.subscribe(({skins}) => {
      if(skins != null)
      {
        this.skins = skins;

        this.isSkinsFound = true;
      }
    })
  }

  onInputChanged(value:string) {
    if(value === '')
    {
      this.skinsService.getAllSkins().subscribe(skins =>
      {
        if(skins != null)
        {
          this.skins = skins

          this.isSkinsFound = true;
        }
      })
    }
    else
    {
      this.skinsService.find(value).pipe(catchError((err)=> this.handleError(err))).subscribe(skins => {
        if(skins != null)
        {
          this.skins = skins;

          this.isSkinsFound = true;
        }
      })
    }
  }

}
