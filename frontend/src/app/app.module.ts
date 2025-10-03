import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Componentes
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { ContactComponent } from './components/contact/contact.component';

// Router
import { routing } from './app.routing';

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
    routing   // Cargo las rutas
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
