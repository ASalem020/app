import { Routes } from '@angular/router';
import { HOME } from './home/home';
import { ABOUT } from './about/about';
import { CONTACT } from './contact/contact';

export const routes: Routes = [
    {
        path: 'home',
        component: HOME
    },
    {
        path: 'about',
        component: ABOUT
    },
    {
        path:'contact',
        component: CONTACT
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
