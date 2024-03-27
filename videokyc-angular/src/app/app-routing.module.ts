import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { VkycComponent } from './page/vkyc/vkyc.component';
import { SignupComponent } from './page/signup/signup.component';
//import { OverlayformComponent } from './components/overlayform/overlayform.component';
import { JourneyComponent } from './page/journey/journey.component';
import { SolutionsComponent } from './page/solutions/solutions.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';

const routes: Routes = [

  //Routing paths
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vkyc', component: VkycComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'journey', component: JourneyComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
