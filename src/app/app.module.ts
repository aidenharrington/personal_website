import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonalWebsiteComponent } from './projects/personal-website/personal-website.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



const appRoutes: Routes = [
  { path: 'personal-website', component: PersonalWebsiteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact-me', component: ContactMeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonalWebsiteComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    ContactMeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ), // <-- debugging purposes only
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
