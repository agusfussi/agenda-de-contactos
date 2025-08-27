import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ContactPages } from './pages/contact-pages/contact-pages';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
//import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: "",
        component: Login
    },
    {
        path:"contact-pages",
        component:ContactPages
    },
    {
        path:"contact-details",
        component:ContactDetailsPage
    },
    // {
        //path:"register-pages",
        //component:Register
    // },
];
