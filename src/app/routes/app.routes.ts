import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ActualProjectsComponent } from '../actual-projects/actual-projects.component';
import { PastProjectsComponent } from '../past-projects/past-projects.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { LoginComponent } from '../login/login.component';
import { NewEntryComponent } from '../components/new-entry/new-entry.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'proyectos-actuales', component: ActualProjectsComponent},
  {path: 'proyectos-pasados', component: PastProjectsComponent},
  {path: 'quienes-somos', component: WhoWeAreComponent},
  {path: 'contactanos', component: ContactUsComponent},
  {path: 'login', component: LoginComponent },
  {path: 'new', component: NewEntryComponent}
];

export const AppRouting = RouterModule.forRoot(appRoutes);


