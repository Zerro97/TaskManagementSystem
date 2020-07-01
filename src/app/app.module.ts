import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { LoginService } from './services/login.service';
import { AuthGuardSerivce } from './services/authGuard.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { TaskService } from './services/task.service';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },//, canActivate:[AuthGuardSerivce]  },
  { path: '', redirectTo:'/Login', pathMatch:'full'},
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTableComponent,
    LoginComponent,
    HomeComponent,
    CockpitComponent,
    TaskDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    MaterialModule,
    BootstrapModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, AuthGuardSerivce, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
