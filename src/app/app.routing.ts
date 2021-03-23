import { Route } from '@angular/compiler/src/core';
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { PostByUserComponent } from './admin/post-by-user/post-by-user.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContacComponent } from './pages/contac/contac.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



const appRoutes:Routes=[
    {
        path:'',
        component:HomeComponent,
        data: {
            titulo: 'Home',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'blog',
        component:BlogComponent,
        data: {
            titulo: 'Blog',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'contact',
        component:ContacComponent,
        data: {
            titulo: 'Contact',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'login',
        component:LoginComponent,
        data: {
            titulo: 'LOGIN',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'logout/:sure',
        component:LoginComponent,
        data: {
            titulo: 'LOGIN',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'register',
        component:RegisterComponent,
        data: {
            titulo: 'Register',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    },
    {
        path:'listPosts/:sure',
        component:PostByUserComponent,
        data: {
            titulo: 'List Posts',
            descripcion: 'Pagina de login',
            keywords: 'usuario,listado'
        }
    }
  
    
];
export const appRoutingProviders:any[] =[]; 
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);