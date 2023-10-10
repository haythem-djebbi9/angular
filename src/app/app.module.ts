import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarquesComponent } from './marques/marques.component';
import { AddMarqueComponent } from './add-marques/add-marques.component';
import { FormsModule } from '@angular/forms';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';

@NgModule({
  declarations: [
    AppComponent,
    MarquesComponent,
    AddMarqueComponent,
    UpdateMarqueComponent
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
