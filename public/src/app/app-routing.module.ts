import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/body/home/home.component';
import { AboutComponent } from './component/body/about/about.component';
import { ConferencesComponent } from './component/body/conferences/conferences.component';
import { SteeringCommiteeComponent } from './component/body/about/steering-commitee/steering-commitee.component';
import { AboutHomeComponent } from './component/body/about/about-home/about-home.component';
import { ConferencesHomeComponent } from './component/body/conferences/conferences-home/conferences-home.component';

const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"about", component: AboutComponent, children: [
        {path: "", component: AboutHomeComponent},
        {path: "steering_commitee", component: SteeringCommiteeComponent}
    ]},
    {path: "conferences", component: ConferencesComponent, children: [
        {path: "", component: ConferencesHomeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
