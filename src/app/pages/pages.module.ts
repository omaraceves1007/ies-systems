import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SnackbarModule } from 'ngx-snackbar';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginPage } from './login/login.page';
import { LoginComponent } from '../components/login/login.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { MyInterceptor } from '../intercertors/interceptor.interceptor';
import { DashboardPage } from './dashboard/dashboard.page';
import { ComponenteUnoPage } from './componente-uno/componente-uno.page';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    LoginPage,
    DashboardPage,
    ComponenteUnoPage,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    PagesRoutingModule,

    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    SnackbarModule.forRoot()
  ],
  exports: [
    LoginPage,
    DashboardPage,
    ComponenteUnoPage
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true  }
  ]
})
export class PagesModule { }
