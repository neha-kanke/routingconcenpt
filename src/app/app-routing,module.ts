import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { ProductsComponent } from "./component/products/products.component";
import { UsersComponent } from "./component/users/users.component";
import { NavberComponent } from "./component/navber/navber.component";
import { AboutsComponent } from "./component/abouts/abouts.component";
import { ProductComponent } from "./component/products/product/product.component";
import { UserComponent } from "./component/users/user/user.component";
import { ProFormComponent } from "./component/products/pro-form/pro-form.component";
import { AuthgaurdService } from "./shared/services/authgaurd.service";
import { FairsDashboardComponent } from "./component/fairs-dashboard/fairs-dashboard.component";
import { FairsDetailsComponent } from "./component/fairs-details/fairs-details.component";

const appRoute: Routes = [
    {
        path: " ",// localhost:4200
        component: HomeComponent
    },
    {
        path: "Home",
        component: HomeComponent

    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "products/add-form",
        component: ProFormComponent
    },
    {
        path: "products/:proid",
        component: ProductComponent
    },
    {
        path: "products/:proid/edit-form",
        component: ProFormComponent
    },
    {
        path: "Users",
        component: UsersComponent,
        canActivate:[AuthgaurdService]
    },
    {
        path: "Users/add", component: ProFormComponent
    },

    {
        path: 'Users/:userid',
        component: UserComponent
    },
    {
        path: 'edit',
        component: ProFormComponent
    },

    {
        path: "Abouts",
        component: AboutsComponent
    },
    {
        path:'fairs',
        component:FairsDashboardComponent,
        children:[
            {
                path:':fairId',
                component:FairsDetailsComponent
            }
        ]
    },
   

]



@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule { }



