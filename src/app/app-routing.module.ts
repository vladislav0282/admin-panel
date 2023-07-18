import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {
    // Создаем вложенный роутинг (переходим в компонент, где есть свой роутинг (импортирует и подгружает модуль AdminModule))
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then((m)=>m.AdminModule )
  },
  {path: '**', component: NotFoundComponent}    //** страница не найдена

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
