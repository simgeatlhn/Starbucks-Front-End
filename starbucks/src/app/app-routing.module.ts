import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KahveComponent } from './kahve/kahve.component';
import { MagazaComponent } from './magaza/magaza.component';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  //eğer url boş geçilirse aşağıdaki path a yönlendirmesi için yazılır
  { path: "kahve", component: KahveComponent },
  { path: "home", component: HomeComponent },
  { path: "magaza", component: MagazaComponent },
  { path: "footer", component: FooterComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
