import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './theme/header/header.component';
import { ContentComponent } from './theme/content/content.component';
import { FooterComponent } from './theme/footer/footer.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [PagesComponent, DemoComponent, HeaderComponent, ContentComponent, FooterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
