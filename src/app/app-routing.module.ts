import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HowToComponent } from './how-to/how-to.component';
import { ProgramComponent } from './program/program.component';

import { IndoorDetailsComponent } from './indoor-details/indoor-details.component';
import { OutdoorDetailsComponent } from './outdoor-details/outdoor-details.component';
import { WhileWorkingDetailsComponent } from './while-working-details/while-working-details.component';
import { ContactComponent } from './contact/contact.component';

import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  //LAZY LOADING
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'training', component: TrainingComponent },
  {
    path: 'myopia',
    loadChildren: () => import('./myopia/myopia.module').then(m => m.MyopiaModule)
  },
  {
    path: 'lazy-eye-training',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)
  },
  {
    path: 'myopia-training',
    loadChildren: () => import('./myopia-training/myopia-training.module').then(m => m.MyopiaTrainingModule)
  }

  //EAGER LOADING
  // {
  //   path: "",
  //   component: HomeComponent,
  //   pathMatch: "full"
  // },
  // { path: 'home', component: HomeComponent },
  // { path: 'howto', component: HowToComponent },
  // { path: 'program', component: ProgramComponent },
  // { path: 'contact', component: ContactComponent },

  // { path: 'indoor', component: IndoorDetailsComponent },
  // { path: 'outdoor', component: OutdoorDetailsComponent },
  // { path: 'work', component: WhileWorkingDetailsComponent },

  // { path: 'training', component: TrainingComponent }

];
@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
