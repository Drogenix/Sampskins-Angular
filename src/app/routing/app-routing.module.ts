import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkinsResolver} from "../skins-resolver/skins.resolver";
import {MainComponent} from "../main/main.component";
import {ThanksComponent} from "../thanks/thanks.component";

const routes: Routes = [
  {
    path:'', component: MainComponent, resolve:{skins:SkinsResolver}
  },
  {
    path:'thanks', component: ThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
