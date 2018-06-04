import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCoursesFormComponent } from './new-courses-form/new-courses-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostsService } from './services/posts.service';
import { AppErrorHandler } from './service-errors/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCoursesFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavBarComponent,
    PageNotFoundComponent,
    GithubProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'home', component: HomeComponent },
      {path: 'TemplateForm', component: SignupFormComponent },
      {path: 'ReactiveForm', component: ContactFormComponent },
      {path: 'FormArray', component: NewCoursesFormComponent },
      {path: 'HttpExample', component: PostsComponent },
      {path: 'GithubFollowers/:userid/:username', component: GithubProfileComponent },
      {path: 'GithubFollowers', component: GithubFollowersComponent },
      {path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [
    PostsService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
