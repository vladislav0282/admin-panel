import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardsComponent } from './components/admin-dashboards/admin-dashboards.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDeteilComponent } from './components/contacts-deteil/contacts-deteil.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: AdminDashboardsComponent,
    children:[
      {path: 'contacts', component: ContactsComponent},
      {path: 'contacts/user/:id', component:ContactsDeteilComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
