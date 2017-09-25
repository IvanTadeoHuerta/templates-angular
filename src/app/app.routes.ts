import { RouterModule, Routes } from '@angular/router'

import { ItemComponent,
        PortafolioComponent,
        AboutComponent
    }from './components/index.paginas'

const app_routes: Routes = [
    {path:'home', component: PortafolioComponent},
    {path:'item', component: ItemComponent },
    {path: 'about', component: AboutComponent},
    {path:'**', pathMatch:'full', redirectTo: 'home'}
]

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true})