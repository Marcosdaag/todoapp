import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

// Definición de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todoapp', component: ListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

// Exporto el Router configurado
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);