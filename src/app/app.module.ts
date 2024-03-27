import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing,module';
import { ProductsComponent } from './component/products/products.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { NavberComponent } from './component/navber/navber.component';
import { ProductComponent } from './component/products/product/product.component';
import { UserComponent } from './component/users/user/user.component';
import { ProFormComponent } from './component/products/pro-form/pro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FairsDashboardComponent } from './component/fairs-dashboard/fairs-dashboard.component';
import { FairsCardsComponent } from './component/fairs-cards/fairs-cards.component';
import { FairsDetailsComponent } from './component/fairs-details/fairs-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    UsersComponent,
    NavberComponent,
    ProductComponent,
    UserComponent,
    ProFormComponent,
    FairsDashboardComponent,
    FairsCardsComponent,
    FairsDetailsComponent,
   
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
