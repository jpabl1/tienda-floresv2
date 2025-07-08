import { Routes } from "@angular/router";
import DashboardPageComponent from "./pages/dashboard-page/dashboard-page.component";
import CatalogPageComponent from "./pages/catalog-page/catalog-page.component";
import BuyPageComponent from "./pages/buy-page/buy-page.component";
import SellPageComponent from "./pages/sell-page/sell-page.component";



export const flowerRoutes: Routes = [ 
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {
        path: 'catalog',
        component: CatalogPageComponent
      },
      {
        path: 'buy/:id',
        component: BuyPageComponent
      },
      {
        path: 'sell',
        component: SellPageComponent
      },
      {
        path: '**',
        redirectTo: 'catalog'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
]
export default flowerRoutes;