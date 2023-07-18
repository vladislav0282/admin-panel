import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDeteilComponent } from './components/contacts-deteil/contacts-deteil.component';
import { AdminDashboardsComponent } from './components/admin-dashboards/admin-dashboards.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    ContactsDeteilComponent,
    AdminDashboardsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
