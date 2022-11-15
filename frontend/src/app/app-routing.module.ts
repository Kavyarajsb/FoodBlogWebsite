import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyblogComponent } from './pages/myblog/myblog.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'path' },
{path:"",component:HomeComponent},
{path:"myblog",component:MyblogComponent},
{path:"signup",component:SignupComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
