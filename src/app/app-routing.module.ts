

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/nav/home/home.component';
import { AppetizersComponent } from './components/nav/appetizers/appetizers.component';
import { MealsComponent } from './components/nav/meals/meals.component';
import { HousespecialtyComponent } from './components/nav/housespecialty/housespecialty.component';
import { CombosComponent } from './components/nav/combos/combos.component';
import { ReservationComponent } from './components/nav/reservation/reservation.component';
import { OrderonlineComponent } from './components/nav/orderonline/orderonline.component';
import { AboutComponent } from './components/nav/about/about.component';
import { ContactComponent } from './components/nav/contact/contact.component';

const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'appetizers',component:AppetizersComponent},
                        {path:'meals',component:MealsComponent},
                        {path:'housespecialty',component:HousespecialtyComponent},
                        {path:'combos',component:CombosComponent},
                        {path:'reservation',component:ReservationComponent},
                        {path:'orderonline',component:OrderonlineComponent},
                        {path:'about',component:AboutComponent},
                        {path:'contact',component:ContactComponent},
                        {path:'**', pathMatch:'full', redirectTo:'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
