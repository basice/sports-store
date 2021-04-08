import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
