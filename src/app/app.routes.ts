import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ContactPages } from './pages/contact-pages/contact-pages';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayouts } from './layouts/logged-layouts/logged-layouts';
import { Register } from './pages/register/register';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';
import { CreateContact } from './pages/create-contact/create-contact';
import { EditContact } from './pages/edit-contact/edit-contact';
//import { Register } from './pages/register/register';
// Repo de donde enconte lo de patchmach https://angular.dev/guide/routing/redirecting-routes?utm_source=chatgpt.com

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"   // solo se activa si la URL está vacía
    },
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
                path: "contact-details/:idContacto",
                component: ContactDetailsPage,
            },
            {
                path: "create-contacts",
                component: CreateContact,
            },
            {
                path: "edit-contact/:idContacto",
                component: EditContact,
            },
        ]
    },
    // {
    //path:"register-pages",
    //component:Register
    // },
];
