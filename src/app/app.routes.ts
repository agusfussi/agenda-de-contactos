import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ContactPages } from './pages/contact-pages/contact-pages';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayouts } from './layouts/logged-layouts/logged-layouts';
import { Register } from './pages/register/register';
//import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path:"register",
        component:Register
    },
    {
        path:"",
        component:LoggedLayouts,
        children:[
                {
        path:"contact-pages",
        component:ContactPages
    },
    {
        path:"contact-details",
        component:ContactDetailsPage
    },
        ]
    },
    // {
        //path:"register-pages",
        //component:Register
    // },
];
