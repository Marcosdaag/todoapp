import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { ContactComponent } from "./components/contact/contact.component";

// Constante con las distintas rutas de la aplicacion
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'todoapp', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: HomeComponent}
];

// Exporto un modulo con las rutas de mi app
export const appRouting: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);