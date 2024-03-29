import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {SalesmenPageComponent} from "./pages/salesmen-page/salesmen-page.component";
import {BonusComputationSheetPageComponent} from "./pages/bonus-computation-sheet-page/bonus-computation-sheet-page.component";
import {SalesPageComponent} from "./pages/sales-page/sales-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {AccountsPageComponent} from "./pages/accounts-page/accounts-page.component";
import {EventLogsPageComponent} from "./pages/event-logs-page/event-logs-page.component";
import { BonusSheetDetailPageComponent } from "./pages/bonus-sheet-detail-page/bonus-sheet-detail-page.component";
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";
import {  FetchDataPageComponent } from "./pages/fetch-data-page/fetch-data-page.component";

/*
  This array holds the relation of paths and components which angular router should resolve.

  If you want add a new page with a separate path/subdirectory you should register it here.
  It is also possible to read parameters from the path they have to be specified with ':' in the path.

  If a new page should also show up in the menu bar, you need to add it there too.
  Look at: frontend/src/app/components/menu-bar/menu-bar.component.ts
 */
const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: WelcomePageComponent, canActivate: [AuthGuardService]},
  {path: 'fetchData', component: FetchDataPageComponent, canActivate: [AuthGuardService]},
  {path: 'salesmen', component: SalesmenPageComponent, canActivate: [AuthGuardService]},
  {path: 'bonusComputationSheets', component: BonusComputationSheetPageComponent, canActivate: [AuthGuardService]},
  {path: 'bonusComputationSheetDetail/:id', component: BonusSheetDetailPageComponent, canActivate: [AuthGuardService]},
  {path: 'sales', component: SalesPageComponent, canActivate: [AuthGuardService]},
  {path: 'eventLogs', component: EventLogsPageComponent, canActivate: [AuthGuardService]},
  {path: 'accounts', component: AccountsPageComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuardService]},
  {path:'**', component: NotFoundPageComponent}, //these entries are matched from top to bottom => not found should be the last entry
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
