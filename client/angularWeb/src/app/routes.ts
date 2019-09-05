import { Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

export const appRoutes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },

  {
    path: '', redirectTo: '/signup', pathMatch: 'full'
  }
];
