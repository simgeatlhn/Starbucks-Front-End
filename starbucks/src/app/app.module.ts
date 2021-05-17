import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { KahveComponent } from './kahve/kahve.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MagazaComponent } from './magaza/magaza.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "kahve", component: KahveComponent },
  { path: "menu", component: MenuComponent },
  { path: "**", component: HomeComponent },

];


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    KahveComponent,
    MenuComponent,
    MagazaComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
