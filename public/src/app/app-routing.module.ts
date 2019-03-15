import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/body/home/home.component';
import { AboutComponent } from './component/body/about/about.component';
import { ConferencesComponent } from './component/body/conferences/conferences.component';

const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"about", component: AboutComponent, children: [
        // {path: ""}
    ]},
    {path: "conferences", component: ConferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
