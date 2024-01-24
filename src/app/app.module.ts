import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { ToolbarComponent } from './components/main/toolbar/toolbar.component';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './core/directives/highlight.directive';
import { DemoPipe } from './core/pipes/demo.pipe';
import { SquarePipe } from './core/pipes/square.pipe';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonManagementComponent } from './components/person/person-management/person-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    HighlightDirective,
    DemoPipe,
    SquarePipe,
    ConfirmationDialogComponent,
    PersonDetailsComponent,
    PersonManagementComponent
  ],
  imports: [
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000
      }
    ),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
