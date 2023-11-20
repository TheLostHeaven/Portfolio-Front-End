import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PageNotFoundComponent } from './error/page-not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contacts', component: ContactsComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
