import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/components/home/home.component';
import { FirstQuestionComponent } from 'src/app/components/first-question/first-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'One' } },
  { path: 'first-question', component: FirstQuestionComponent, data: { animationState: 'Two' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
