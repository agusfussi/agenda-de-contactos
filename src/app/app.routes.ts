import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ContactPages } from './pages/contact-pages/contact-pages';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayouts } from './layouts/logged-layouts/logged-layouts';
import { Register } from './pages/register/register';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';
import { CreateContact } from './pages/create-contact/create-contact';
//import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: "login",
        component: Login,
        canActivate: [onlyPublicUserGuard]
    },
    {
        path: "register",
        component: Register,
        canActivate: [onlyPublicUserGuard]
    },
    {
        path: "",
        component: LoggedLayouts,
        canActivateChild: [onlyLoggedUserGuard],
        children: [
            {
                path: "contact-pages",
                component: ContactPages,

            },
            {
                path: "contact-details",
                component: ContactDetailsPage,
            },
            {
                path: "create-contacts",
                component: CreateContact,
            },
        ]
    },
    // {
    //path:"register-pages",
    //component:Register
    // },
];
