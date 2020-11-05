
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ContentComponent } from './theme/content/content.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: '', component: ContentComponent
          },
         
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
