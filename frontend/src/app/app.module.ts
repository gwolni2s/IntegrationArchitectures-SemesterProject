import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SalesmenPageComponent } from './pages/salesmen-page/salesmen-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { BonusComputationSheetPageComponent } from './pages/bonus-computation-sheet-page/bonus-computation-sheet-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EventLogsPageComponent } from './pages/event-logs-page/event-logs-page.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from "@angular/cdk/table";
import { BonusSheetDetailPageComponent } from './pages/bonus-sheet-detail-page/bonus-sheet-detail-page.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    MenuBarComponent,
    NotFoundPageComponent,
    SalesmenPageComponent,
    SalesPageComponent,
    BonusComputationSheetPageComponent,
    ProfilePageComponent,
    EventLogsPageComponent,
    AccountsPageComponent,
    BonusSheetDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    CdkTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
