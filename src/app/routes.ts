// routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home Page' }
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        data: { title: 'Details Page' }
    }
];

export default routes;
