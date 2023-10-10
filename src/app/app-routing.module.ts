import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarquesComponent } from './marques/marques.component';
import { AddMarqueComponent } from './add-marques/add-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';

const routes: Routes = [

  {path: "marques", component : MarquesComponent},
  {path: "add-marque", component : AddMarqueComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path: "updateMarque/:id", component: UpdateMarqueComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
