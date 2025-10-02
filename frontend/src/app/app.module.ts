import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
// Modulos para que funcione el router (CREADOS DENTRO DEL APP.ROUTING.TS)
import { routing, appRouting } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    UpdateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
