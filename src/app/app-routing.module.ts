import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotComponent } from './pagenot/pagenot.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path : 'login',component:LoginComponent},
  { path : 'weather', component : WeatherComponent},
  { path : '', redirectTo : 'home', pathMatch:'full'},
  { path : '**', component : PagenotComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
