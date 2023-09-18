
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/nav/about/about.component';
import { CombosComponent } from './components/nav/combos/combos.component';
import { ContactComponent } from './components/nav/contact/contact.component';
import { HomeComponent } from './components/nav/home/home.component';
import { HousespecialtyComponent } from './components/nav/housespecialty/housespecialty.component';
import { MealsComponent } from './components/nav/meals/meals.component';
import { AppetizersComponent } from './components/nav/appetizers/appetizers.component';
import { OrderonlineComponent } from './components/nav/orderonline/orderonline.component';
import { ReservationComponent } from './components/nav/reservation/reservation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    CombosComponent,
    ContactComponent,
    HomeComponent,
    HousespecialtyComponent,
    MealsComponent,
    AppetizersComponent,
    OrderonlineComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
