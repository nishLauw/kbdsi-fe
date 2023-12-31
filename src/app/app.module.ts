import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ReminderCreateComponent } from './components/reminder-create/reminder-create.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionCreateComponent } from './components/transaction-create/transaction-create.component';
import { EbudgetingComponent } from './components/ebudgeting/ebudgeting.component';
import { BookkeepingComponent } from './components/bookkeeping/bookkeeping.component';
import { EbudgetingCreateComponent } from './components/ebudgeting-create/ebudgeting-create.component';
import { TransactionUpdateComponent } from './components/transaction-update/transaction-update.component';
import { ReminderUpdateComponent } from './components/reminder-update/reminder-update.component';
import { ComponentsComponent } from './components/components.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReminderComponent } from './reminder/reminder.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ReminderCreateComponent } from './reminder-create/reminder-create.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
>>>>>>> 6dd32c688efd0693a56f26ebcd1ce895fa14a3d7


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    DashboardComponent,
    ReminderComponent,
    UserUpdateComponent,
    UserCreateComponent,
    ReminderCreateComponent,
    TransactionComponent,
    TransactionCreateComponent,
<<<<<<< HEAD
    EbudgetingComponent,
    BookkeepingComponent,
    EbudgetingCreateComponent,
    TransactionUpdateComponent,
    ReminderUpdateComponent,
    ComponentsComponent,

=======
>>>>>>> 6dd32c688efd0693a56f26ebcd1ce895fa14a3d7


  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

